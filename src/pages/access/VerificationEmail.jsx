import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../assets/ButtonAsset';
import Logo from '../../assets/LogoAsset';
import style from './style/verificationStyle.module.scss';
import Title from '../../assets/TitleAsset';
import { useHistory } from 'react-router-dom';
import Axios from '../../utils/Axios';
export default function VerificationEmail() {
  const { email } = useParams();
  const [isSubmitting, setisSubmitting] = useState(false);
  const history = useHistory();
  const submitHandler = async () => {
    setisSubmitting(true);
    try {
      const res = await Axios.post('auths/email/sendToken', { email: email });
      setisSubmitting(false);

      if (res.status === 201) {
        return history.push(
          `/meropustakalaya/access/user/verify/${res.data.email}`
        );
      }
    } catch (error) {
      setisSubmitting(false);
      if (!error.response) {
        return alert('Something went wrong. Check your internet connection');
      }
      let { data } = error.response;
      let { status } = error.response;
      if (status === 400 && data.type === 'email') {
        alert(data.message);
      } else if (status === 400 && data.type === 'user') {
        alert(data.message);
      } else {
        alert('Something went wrong');
      }
      history.push('/meropustakalaya/access/login');
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <Title
        title='Your Account is not verified'
        fontWeight='bold'
        fontSize='25px'
      />
      <Title
        title={`Your account ${email} is not verified. Please verify your email😊`}
        fontSize='20px'
      />
      <Button
        title='Send  OTP code'
        onClickFn={submitHandler}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
