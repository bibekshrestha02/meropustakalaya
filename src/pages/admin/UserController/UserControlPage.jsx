import React, { useState } from 'react';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import TableComponent from '../../../component/adminComponent/TableComponent';
import style from '../style/adminStyle.module.scss';
import DeleteButton from '../../../assets/DeleteButton';
import SortComponent from './component/SortComponent';
import SubscriptionDetailComponent from './component/SubscriptionDetailComponent';
import Axios from '../../../utils/Axios';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function UserControlPage() {
  const [isSubscriptionModel, setSubscriptionModel] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState('');
  const isComponentMount = React.useRef(true);
  const getUsers = () => {
    return Axios.get('/users/');
  };
  const { data, loading, error, setData } = useFetchApi(
    [getUsers()],
    isComponentMount
  );
  const toogleModel = (detail) => {
    if (!detail) {
      setSelectedSubscription('');
    } else {
      setSelectedSubscription(detail);
    }
    setSubscriptionModel((e) => !e);
  };

  const tableHeader = [
    'name',
    'email',
    'isVerified',
    'Join at',
    'role',
    'subscription',
    '',
  ];
  let res = !loading && !error ? data[0] : [];
  const deleteHandler = async (id) => {
    try {
      const isOk = window.confirm();
      if (!isOk) {
        return;
      }
      await Axios.delete(`/users/${id}`);
      let newState = res.filter((e) => e._id !== id);
      setData([newState]);
    } catch (error) {
      alert('Something went wrong try again');
    }
  };

  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.userControlContainer}>
        <SortComponent setData={setData} />
        <AdminWaperContainer title='User Details'>
          <TableComponent tableHeaders={tableHeader} isNull={res.length < 1}>
            {res.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.isVerfied ? 'true' : 'false'}</td>
                  <td>{new Date(e.join_at).toDateString()}</td>
                  <td>{e.role}</td>
                  <td>
                    {e.subscriptionDetail ? (
                      <DeleteButton
                        name=' View Details'
                        handler={() => toogleModel(e.subscriptionDetail)}
                      />
                    ) : (
                      'false'
                    )}
                  </td>
                  <td>
                    <DeleteButton handler={() => deleteHandler(e._id)} />
                  </td>
                </tr>
              );
            })}
          </TableComponent>
        </AdminWaperContainer>
        {isSubscriptionModel && (
          <SubscriptionDetailComponent
            toogleModel={toogleModel}
            detail={selectedSubscription}
          />
        )}
      </div>
      );
    </FetchApiTemplete>
  );
}
