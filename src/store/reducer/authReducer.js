const initalState = {
  _id: '',
  email: '',
  name: '',
  role: '',
  join_at: '',
  isVerfied: '',
  isLogin: '',
  subscriptionDetail: {},
  savedBooks: [],
  isSubscribe: function () {
    const start_at =
      this.subscriptionDetail && this.subscriptionDetail.start_at;
    const expires_at =
      this.subscriptionDetail && this.subscriptionDetail.expires_at;
    if (!start_at) {
      return false;
    } else if (new Date(expires_at) > Date.now()) {
      return true;
    } else {
      return false;
    }
  },
};

const AuthStore = (state = initalState, action) => {
  switch (action.type) {
    case 'login':
      let {
        email,
        name,
        role,
        isVerfied,
        join_at,
        saveBook,
        subscriptionDetail,
        _id,
      } = action.data;
      state.email = email;
      state.name = name;
      state.role = role;
      state.isVerfied = isVerfied;
      state.join_at = join_at;
      state.isLogin = true;
      state.savedBooks = saveBook;
      state.subscriptionDetail = subscriptionDetail;
      state._id = _id;
      return state;
    case 'logout':
      state.email = '';
      state.name = '';
      state.role = '';
      state.isVerfied = '';
      state.join_at = '';
      state.isLogin = '';
      state.savedBooks = [];
      state._id = '';
      state.subscriptionDetail = {};
      return state;
    case 'save':
      let { data } = action;
      let isSave = state.savedBooks.includes(data);
      if (isSave) {
        state.savedBooks = state.savedBooks.filter((e) => e !== data);
      } else {
        state.savedBooks.push(data);
      }
      return state;
    case 'subscribtion':
      state.subscriptionDetail = action.data;
      return state;
    default:
      return state;
  }
};
export default AuthStore;
