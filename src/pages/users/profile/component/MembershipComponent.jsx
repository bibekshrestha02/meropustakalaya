import React from 'react';
import style from './style.module.scss';
import CardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import Button from '../../../../assets/ButtonAsset';
import TitleValueComponent from '../../../../component/adminComponent/TitleValueComponent';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getDay } from '../../../../utils/helperFn';
export default function MembershipComponent() {
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
              subscriptionDetail
                ? new Date(subscriptionDetail.start_at).toDateString()
                : '-'
            }
          />
          <TitleValueComponent
            title='Update At'
            value={
              subscriptionDetail
                ? subscriptionDetail.update_at
                  ? new Date(subscriptionDetail.update_at).toDateString()
                  : '-'
                : '-'
            }
          />
          <TitleValueComponent
            title='Expires At'
            value={
              subscriptionDetail
                ? new Date(subscriptionDetail.expires_at).toDateString()
                : '-'
            }
          />
          <TitleValueComponent
            title='Remaining Day'
            value={
              subscriptionDetail
                ? `${getDay(Date.now(), subscriptionDetail.expires_at)} days`
                : '-'
            }
          />
        </div>
        <Button
          title={subscriptionDetail ? 'Renew Subscribtion' : 'subscribe'}
          fontSize='10px'
          isOutline
          onClickFn={() =>
            push({
              pathname: '/meropustakalaya/membership',
              state: { path: location.pathname },
            })
          }
        />
      </div>
    </CardContainer>
  );
}
