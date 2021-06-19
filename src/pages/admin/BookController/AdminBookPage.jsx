import React from 'react';
import style from '../style/adminStyle.module.scss';
import { useHistory } from 'react-router-dom';
import Axios from '../../../utils/Axios';
import { IoMdAddCircleOutline } from 'react-icons/io';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import TableComponent from '../../../component/adminComponent/TableComponent';
import BookImageMinComponent from '../../../component/adminComponent/BookImageMinComponent';
import DeleteButton from '../../../assets/DeleteButton';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function BookControlPage() {
  const { push } = useHistory();
  const isComponentMount = React.useRef(true);
  const getBooks = () => {
    return Axios.get('/books/adminBooks');
  };
  const { data, loading, error, setData } = useFetchApi(
    [getBooks()],
    isComponentMount
  );
  const createBookHanlder = () => {
    push('/meropustakalaya/admin/createBook');
  };
  const updateBookHandler = (book) => {
    push({
      pathname: '/meropustakalaya/admin/createBook',
      state: {
        book,
      },
    });
  };
  let res = !loading && !error ? data[0] : [];
  const deleteHanlder = async (id) => {
    try {
      let isOk = window.confirm('Are you sure?');
      if (!isOk) {
        return;
      }
      await Axios.delete(`/books/${id}`);
      let newState = res.filter((book) => book._id !== id);
      setData([newState]);
    } catch (error) {
      alert('Something went wrong, Please try again');
    }
  };
  const tableHanlder = [
    'Photo',
    'Name',
    'category',
    'Rating',
    'Pages',
    'Add on',
    'Files',
    '',
    '',
  ];
  const tableData =
    !loading &&
    !error &&
    res.map((e) => {
      return (
        <tr key={e._id}>
          <td>
            <BookImageMinComponent imgUrl={e.photo} />
          </td>
          <td>{e.name}</td>
          <td>{e.category}</td>
          <td>{e.rating}</td>
          <td>{e.pages}</td>
          <td>{new Date(e.releasedAt).toLocaleString().split(',')[0]}</td>
          <td>
            <DeleteButton
              name='View'
              handler={() => push(`/meropustakalaya/book/view/${e.file}`)}
            />
          </td>
          <td>
            <DeleteButton name='Update' handler={() => updateBookHandler(e)} />
          </td>
          <td>
            <DeleteButton handler={() => deleteHanlder(e._id)} />
          </td>
        </tr>
      );
    });
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.bookControlContainer}>
        <AdminWaperContainer
          title='Book Details'
          ButtonIcon={IoMdAddCircleOutline}
          buttonHandler={createBookHanlder}
          tooleTip='Add Book'>
          <TableComponent tableHeaders={tableHanlder} isNull={res.length < 1}>
            {tableData}
          </TableComponent>
        </AdminWaperContainer>
      </div>
    </FetchApiTemplete>
  );
}
