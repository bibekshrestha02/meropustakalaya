import React, { useState } from 'react';
import Button from '../../assets/ButtonAsset';

import Logo from '../../assets/LogoAsset';
import style from './style/recoverInitateStyle.module.scss';
import Title from '../../assets/TitleAsset';
import { useHistory, useParams } from 'react-router-dom';
import Axios from '../../utils/Axios';

export default function RecoverInitiate() {
  const history = useHistory();
  const [isSubmitting, setSubmitting] = useState(false);

  const { email } = useParams();
  const submitHandler = async () => {
    setSubmitting(true);
    try {
      const res = await Axios.post('/auths/resetPassword/sendOtp', { email });
      if (res.status === 200 && res.data.status === 'sucess') {
        history.push(`/access/recover/${email}`);
      }
    } catch (error) {
      setSubmitting(false);

      if (!error.response) {
        return alert('Something went wrong. Check your internet connection');
      }
      const { data } = error.response;
      const { status } = error.response;
      if (status === 400 && !data.email) {
        alert(data.message);

        history.push('/access/login');
      } else {
        alert('Something went very wrong please try again');

        history.push('/access/login');
      }
    }
  };

  return (
    <div className={style.container}>
      <Logo fontSize='40px' />

      <Title
        title={`We will send OTP code to your email "${email}", to recover your password.`}
        fontSize='20px'
      />

      <Button
        title='Continue'
        type='submit'
        onClickFn={submitHandler}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
