import React, { useState } from 'react';
import TableComponent from '../../../component/adminComponent/TableComponent';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import AddCategoryModelComponent from './component/AddCategoryModelComponent';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
import style from '../style/adminStyle.module.scss';
import DeleteButton from '../../../assets/DeleteButton';
import { IoMdAddCircleOutline } from 'react-icons/io';
import Axios from '../../../utils/Axios';
export default function CategoryControllerPage() {
  const [isCategory, setCategory] = useState(false);
  const categoryHandler = () => {
    setCategory((e) => !e);
  };

  let tableHeader = ['Name', 'Title', ''];
  return (
    <GetFetchPageTemplete urls={['/categories']}>
      {({ data, setData }) => {
        let categoryData = data[0];
        const deleteHandler = async (id) => {
          try {
            let isConfirm = window.confirm('Are you Sure?');
            if (!isConfirm) {
              return;
            }
            await Axios.delete(`/categories/${id}`);
            setData((e) => {
              let newState = e[0].filter((category) => category._id !== id);
              setData([newState]);
            });
          } catch (error) {
            alert('Something went wrong try again');
          }
        };
        return (
          <div className={style.adminPageContainer}>
            <AdminWaperContainer
              title='Book Categories'
              buttonHandler={categoryHandler}
              ButtonIcon={IoMdAddCircleOutline}>
              <TableComponent
                tableHeaders={tableHeader}
                isNull={categoryData.length < 1}>
                {categoryData.map((e) => {
                  return (
                    <tr key={e._id}>
                      <td>{e.name}</td>
                      <td>{e.title}</td>
                      <td>
                        <DeleteButton handler={() => deleteHandler(e._id)} />
                      </td>
                    </tr>
                  );
                })}
              </TableComponent>
            </AdminWaperContainer>
            {isCategory && (
              <AddCategoryModelComponent
                categoryHandler={categoryHandler}
                setData={setData}
              />
            )}
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
