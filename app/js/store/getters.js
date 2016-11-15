const getters = {
  allUsers(state) {
    return state.users;
  },

  getUser(state) {
    return state.currentUser;
  }
};

export default getters;
