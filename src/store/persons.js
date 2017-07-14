import client from '../utils/client';
import parseList from '../utils/parseList';

const RESOURCE = 'persons';

const FETCH_LIST_START = 'tweet-direct/persons/FETCH_LIST_START';
const FETCH_LIST_SUCCESS = 'tweet-direct/persons/FETCH_LIST_SUCCESS';
const FETCH_LIST_ERROR = 'tweet-direct/persons/FETCH_LIST_ERROR';

const initialState = {
  loaded: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export const fetchListStart = () => ({
  type: FETCH_LIST_START,
});

export const fetchListSuccess = ({ data, headers }) => {
  const { list, pagination, links } = parseList(data, RESOURCE);

  return {
    type: FETCH_LIST_SUCCESS,
    data: list,
    pagination,
    links,
    headers,
  };
};

export const fetchListError = error => ({
  type: FETCH_LIST_ERROR,
  error,
});

export const fetchList = () => client.get('/api/persons');
