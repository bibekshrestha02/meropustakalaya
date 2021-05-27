import React from 'react';
import AdminDetailsCard from './components/AdminDetailCard';
import { IoBook, IoPeople, IoPersonAdd } from 'react-icons/io5';
import { GrUserAdmin, GrFilter } from 'react-icons/gr';
import { MdRateReview, MdCardMembership } from 'react-icons/md';
import { GoUnverified, GoVerified } from 'react-icons/go';
import style from '../style/adminStyle.module.scss';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
export default function Dashboard() {
  return (
    <GetFetchPageTemplete urls={['/admins/dashboard']}>
      {({ data }) => {
        let res = data[0];
        let {
          totalAdmin,
          totalBook,
          totalCategory,
          totalPackage,
          totalReview,
          totalSubscribeUser,
          totalUnverifiedUser,
          totalUser,
          totalVerifiedUser,
        } = res;
        return (
          <div className={style.dashboardContainer}>
            <div className={style.cardsContainer}>
              <AdminDetailsCard
                title='Total Users'
                number={totalUser}
                Icon={IoPeople}
              />
              <AdminDetailsCard
                title='Total Subscribe Users'
                number={totalSubscribeUser}
                Icon={IoPersonAdd}
              />
              <AdminDetailsCard
                title='Total Admin'
                number={totalAdmin}
                Icon={GrUserAdmin}
              />
              <AdminDetailsCard
                title='Total Books'
                number={totalBook}
                Icon={IoBook}
              />
              <AdminDetailsCard
                title='Total Category'
                number={totalCategory}
                Icon={GrFilter}
              />
              <AdminDetailsCard
                title='Total Books Reviews'
                number={totalReview}
                Icon={MdRateReview}
              />
              <AdminDetailsCard
                title='Total Package'
                number={totalPackage}
                Icon={MdCardMembership}
              />

              <AdminDetailsCard
                title='Total Unverified Users'
                number={totalUnverifiedUser}
                Icon={GoUnverified}
              />
              <AdminDetailsCard
                title='Total Verified Users'
                number={totalVerifiedUser}
                Icon={GoVerified}
              />
            </div>
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
