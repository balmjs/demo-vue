let useBackendRouter = false; // change it, as you wish

// has auth
const init = (fn, axios = '') => {
  if (useBackendRouter) {
    require('./back-end')(fn, axios);
  } else {
    require('./front-end')(fn);
  }
};

// non auth
const initSimple = fn => {
  fn(require('./simple').default);
};

export default init;
