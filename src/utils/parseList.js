import parseSingle from './parseSingle';

export default (data, resource) => {
  /* eslint-disable no-underscore-dangle */
  const list = data._embedded[resource].map(item => parseSingle(item));
  const links = data._links;
  /* eslint-enable no-underscore-dangle */
  const pagination = data.page;

  return {
    list,
    pagination,
    links,
  };
};
