import React, { useState } from 'react';
import style from '../style/style.module.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/action/authAction';
import { accountPopCard } from '../../../store/action/modelAction';
import Axios from '../../../utils/Axios';
import ForgetPasswordComponent from './component/ForgetPasswordComponent';
import MembershipComponent from './component/MembershipComponent';
import GeneralDetailsContainer from './component/GeneralDetailsContainer';
import ProfileHeaderComponent from './component/ProfileHeaderComponent';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
export default function UserDetail() {
  const isComponentMount = React.useRef(true);
  const getProfile = () => {
    return Axios.get('/users/me');
  };
  const { data, setData, loading, error } = useFetchApi(
    [getProfile()],
    isComponentMount
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [isForgetPassword, setForgetPassword] = useState(false);
  const role = useSelector((state) => state.auth.role);
  const logoutHandler = () => {
    history.push('/meropustakalaya/');
    dispatch(logout());
    dispatch(accountPopCard());
  };
  const forgetPasswordHandler = (isLoading) => {
    if (isLoading) {
      return;
    }
    setForgetPassword((e) => !e);
  };
  let user = data[0];
  const submitHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      if (values.name === user.name) {
        return;
      }
      const res = await Axios.put('/users/', {
        name: values.name,
      });
      setData([res.data.data]);
      setSubmitting(false);
    } catch (error) {
      alert('Something went wrong try again');
      setSubmitting(false);
    }
  };
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.profileContainer}>
        <ProfileHeaderComponent user={user} logoutHandler={logoutHandler} />
        <GeneralDetailsContainer
          submitHandler={submitHandler}
          user={user}
          forgetPasswordHandler={forgetPasswordHandler}
        />
        {role === 'user' && <MembershipComponent user={user} />}
        {isForgetPassword && (
          <ForgetPasswordComponent
            forgetPasswordHanlder={forgetPasswordHandler}
          />
        )}
      </div>
    </FetchApiTemplete>
  );
}
