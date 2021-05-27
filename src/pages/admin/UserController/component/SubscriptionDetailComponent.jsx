import React from 'react';
import ModalAdmin from '../../../../component/adminComponent/ModalAdmin';
import TitleValueComponent from '../../../../component/adminComponent/TitleValueComponent';
import style from './style.module.scss';
import { getDay } from '../../../../utils/helperFn';
export default function SubscriptionDetailComponent({ toogleModel, detail }) {
  return (
    <ModalAdmin closeHanlder={toogleModel} title='Membership Detail'>
      <div className={style.subscriptionDetailContainer}>
        <TitleValueComponent
          title='Starts at '
          value={new Date(detail.start_at).toDateString()}
        />
        <TitleValueComponent
          title='Update at '
          value={new Date(detail.update_at).toDateString()}
        />
        <TitleValueComponent
          title='Expires at '
          value={new Date(detail.expires_at).toDateString()}
        />
        <TitleValueComponent
          title='Days left '
          value={`${getDay(detail.start_at, detail.expires_at)} days`}
        />
        <TitleValueComponent title='Package Id' value={detail._id} />
      </div>
    </ModalAdmin>
  );
}
