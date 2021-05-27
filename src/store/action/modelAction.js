export const toogleReviewBook = () => {
  return { type: 'toogleReviewBook' };
};
export const toogleAddCategory = () => {
  return { type: 'toogleAddCategory' };
};
export const toogleAddMembershipModel = () => {
  return { type: 'toogleAddMembershipModel' };
};
export const toogleSubscriptionDetail = () => {
  return { type: 'toogleSubscriptionDetail' };
};
export const accountPopCard = () => {
  return { type: 'accountPopCard' };
};

export const errModelToggler = (modelStatus, message) => {
  return { type: 'toogleErrModel', modelStatus, message };
};

export const toogleNav = () => {
  return { type: 'toogleNav' };
};
