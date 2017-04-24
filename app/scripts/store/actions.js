import * as types from './mutation-types';
import axios from 'axios';
import api from '../config/api';

const actions = {
  addUser({ commit }, user) {
    console.info('add user', user);
    // TODO: ajax get user.id
    commit(types.ADD_USER, { user });
  },

  deleteUser({ commit }, user) {
    console.info('delete user', user);
    commit(types.DELETE_USER, { user });
  },

  editUser({ commit }, { user, name }) {
    console.info('edit user', user, name);
    commit(types.EDIT_USER, { user, name });
  },

  async getAllUsers({ commit }) {
    console.info('all users');
    let response = await axios.get(api.user.getList);

    // TODO: unstandard response
    let users = response.data.map(user => {
      return {
        id: user.id,
        name: user.name
      };
    });

    commit(types.ALL_USERS, { users });
  },

  getUser({ commit }, id) {
    console.info('one user', id);
    commit(types.ONE_USER, { id });
  }
};

export default actions;
