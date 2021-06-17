import React, { useState } from 'react';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import TableComponent from '../../../component/adminComponent/TableComponent';
import style from '../style/adminStyle.module.scss';
import CreatePackageModelComponent from './component/CreatePackageModelComponent';
import Axios from '../../../utils/Axios';
import TableDataComponent from './component/TableDataComponent';
import { IoMdAddCircleOutline } from 'react-icons/io';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function PriceControlPage() {
  const [isCreatePageModal, setCreatePageModal] = useState(false);
  const [isSubmitDeleting, setSubmitDeleting] = useState(false);
  const tableHeaders = [
    'Name',
    'Price',
    'Validity Days',
    'description',
    'Enable',
    '',
  ];
  const isComponentMount = React.useRef(true);
  const getPackages = () => {
    return Axios.get('/packages/all');
  };
  const { data, loading, error, setData } = useFetchApi(
    [getPackages()],
    isComponentMount
  );
  const modalHandler = () => {
    setCreatePageModal((e) => !e);
  };
  const packageEnableHandler = async (id) => {
    try {
      await Axios.put(`packages/toogle/${id}`);
    } catch (error) {
      alert('Something went worng, try again');
    }
  };
  let packageData = !loading && !error ? data[0] : [];
  const deleteHanlder = async (id) => {
    try {
      let isOk = window.confirm('Are you sure?');
      if (!isOk) {
        return;
      }
      setSubmitDeleting(true);
      setSubmitDeleting(false);
      await Axios.delete(`/packages/${id}`);
      let packages = packageData.filter((e) => e._id !== id);
      setData([packages]);
    } catch (error) {
      alert('Something went very Wrong');
      setSubmitDeleting(false);
    }
  };
  const createPackageHandler = async (
    values,
    { setSubmitting, setFieldError }
  ) => {
    try {
      setSubmitting(true);
      const res = await Axios.post('/packages/', values);
      let newState = [...packageData, res.data.data];
      setData([newState]);
      setCreatePageModal(false);
      setSubmitting(false);
    } catch (error) {
      if (error.response.status === 400) {
        setFieldError(error.response.data.name, error.response.data.message);
      } else {
        alert('Something went wrong please try again');
        setCreatePageModal(false);
      }
      setSubmitting(false);
    }
  };

  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.priceControlPageContainer}>
        <AdminWaperContainer
          title='Membership Package'
          ButtonIcon={IoMdAddCircleOutline}
          buttonHandler={modalHandler}>
          <TableComponent tableHeaders={tableHeaders}>
            <TableDataComponent
              deleteHanlder={deleteHanlder}
              packageData={packageData}
              isSubmitDeleting={isSubmitDeleting}
              enableHandler={packageEnableHandler}
            />
          </TableComponent>
        </AdminWaperContainer>
        {isCreatePageModal && (
          <CreatePackageModelComponent
            modalHandler={modalHandler}
            createPackageHandler={createPackageHandler}
          />
        )}
      </div>
    </FetchApiTemplete>
  );
}
