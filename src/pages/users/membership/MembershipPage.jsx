import React, { useState } from 'react';
import Logo from '../../../assets/LogoAsset';
import Title from '../../../assets/TitleAsset';
import style from '../style/style.module.scss';
import MembershipCard from './component/MembershipCard';
import SelectedPriceContainer from './component/SelectedPriceContainer';
import { useDispatch } from 'react-redux';
import { subscribeAction } from '../../../store/action/authAction';
import { useHistory } from 'react-router-dom';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import Axios from '../../../utils/Axios';
export default function MembershipPage() {
  const isComponentmount = React.useRef(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedPackage, setSelectPackage] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [isSubmitingSubscribe, setSubmitingSubscribe] = useState(false);
  const getMembership = () => {
    return Axios.get('/packages');
  };
  const { data, loading, error } = useFetchApi(
    [getMembership()],
    isComponentmount
  );
  let packages = data[0];
  const selectValueFn = (id) => {
    setSelectPackage(id);
    let packageIndex = packages.findIndex((e) => e._id === id);
    setPackagePrice(packages[packageIndex].price);
  };
  const subscribeHandler = async () => {
    try {
      setSubmitingSubscribe(true);
      await dispatch(subscribeAction(selectedPackage));
      setSubmitingSubscribe(false);
      alert('Sucessfully subscribed');
      history.push(history.location.state ? history.location.state.path : '/');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      setSubmitingSubscribe(false);
    }
  };
  return (
    <FetchApiTemplete loading={loading} error={error} noNav>
      <div className={style.membershipPageContainer}>
        <Logo color='#ef5354' fontSize='30px' />
        <Title title='Get unlimited access to every Books' fontSize='20px' />
        <MembershipCard
          packages={packages}
          selectValueFn={selectValueFn}
          selectedPackage={selectedPackage}
        />
        {selectedPackage && (
          <SelectedPriceContainer
            isSubmiting={isSubmitingSubscribe}
            selectedPrice={packagePrice}
            subscribeHandler={subscribeHandler}
          />
        )}
      </div>
    </FetchApiTemplete>
  );
}
