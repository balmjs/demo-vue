let useBackendRouter = false; // change it, as you wish

// has auth
const init = fn => {
  if (useBackendRouter) {
    require('./back-end').default(fn);
  } else {
    fn(require('./front-end').default);
  }
};

// non auth
const initSimple = fn => {
  fn(require('./simple').default);
};

export default initSimple;
