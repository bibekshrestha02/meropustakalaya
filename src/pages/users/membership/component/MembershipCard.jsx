import React from 'react';
import style from './style.module.scss';
import Title from '../../../../assets/TitleAsset';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
export default function MembershipCard({
  packages,
  selectValueFn,
  selectedPackage,
}) {
  return packages.map((e) => {
    return (
      <div
        key={e._id}
        onClick={() => {
          selectValueFn(e._id);
        }}
        className={style.membershipCard}>
        {selectedPackage === e._id ? (
          <ImCheckboxChecked />
        ) : (
          <ImCheckboxUnchecked />
        )}
        <div>
          <Title title={e.name} fontSize='18px' />
          <Title title={`Rs. ${e.price}`} fontSize='14px' color='gray' />
        </div>
      </div>
    );
  });
}
