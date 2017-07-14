export default (data, resource) => {
  /* eslint-disable no-underscore-dangle */
  const list = data._embedded[resource];
  const links = data._links;
  /* eslint-enable no-underscore-dangle */
  const pagination = data.page;

  return {
    list,
    pagination,
    links,
  };
};
