import React from 'react';
import style from './style.module.scss';
import CardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import Button from '../../../../assets/ButtonAsset';
import TitleValueComponent from '../../../../component/adminComponent/TitleValueComponent';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getDay } from '../../../../utils/helperFn';
export default function MembershipComponent({ user }) {
  const isSubscribe = useSelector((state) => state.auth.isSubscribe());
  const subscriptionDetail = useSelector(
    (state) => state.auth.subscriptionDetail
  );
  const { push } = useHistory();
  const location = useLocation();
  return (
    <CardContainer title='Membership'>
      <div className={style.membershipContainer}>
        <div>
          <TitleValueComponent
            title='Start At'
            value={
              isSubscribe
                ? new Date(subscriptionDetail.start_at).toDateString()
                : '-'
            }
          />
          <TitleValueComponent
            title='Update At'
            value={
              isSubscribe
                ? subscriptionDetail.update_at
                  ? new Date(subscriptionDetail.update_at).toDateString()
                  : '-'
                : '-'
            }
          />
          <TitleValueComponent
            title='Expires At'
            value={
              isSubscribe
                ? new Date(subscriptionDetail.expires_at).toDateString()
                : '-'
            }
          />
          <TitleValueComponent
            title='Remaining Day'
            value={
              isSubscribe
                ? `${getDay(Date.now(), subscriptionDetail.expires_at)} days`
                : '-'
            }
          />
        </div>
        <Button
          title={isSubscribe ? 'Renew Subscribtion' : 'subscribe'}
          fontSize='10px'
          isOutline
          onClickFn={() =>
            push({
              pathname: '/membership',
              state: { path: location.pathname },
            })
          }
        />
      </div>
    </CardContainer>
  );
}
