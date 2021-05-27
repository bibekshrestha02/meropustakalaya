const initalState = {
  errModel: {
    status: false,
    message: 'invalid Email',
  },
  nav: false,
  isReviewBook: false,
  isAddCategory: false,
  isUserSubscriptionDetail: false,
  isAddMembershipModel: false,
};
const ModelStore = (state = initalState, action) => {
  const { message, modelStatus } = action;
  switch (action.type) {
    case 'toogleReviewBook':
      state.isReviewBook = !state.isReviewBook;
      return state;
    case 'toogleAddCategory':
      state.isAddCategory = !state.isAddCategory;
      return state;
    case 'toogleAddMembershipModel':
      state.isAddMembershipModel = !state.isAddMembershipModel;
      return state;
    case 'toogleSubscriptionDetail':
      state.isUserSubscriptionDetail = !state.isUserSubscriptionDetail;
      return state;
    case 'toogleErrModel':
      state.errModel.status = modelStatus;
      state.errModel.message = message;
      return state;

    case 'toogleNav':
      state.nav = !state.nav;
      return state;
    default:
      return state;
  }
};
export default ModelStore;
