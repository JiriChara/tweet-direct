export default obj => ({
  ...obj,
  /* eslint-disable no-underscore-dangle */
  id: obj._links.self.href,
  /* eslint-enable no-underscore-dangle */
});
