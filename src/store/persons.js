import client from '../utils/client';
import parseList from '../utils/parseList';

const RESOURCE = 'persons';

const FETCH_LIST_SUCCESS = 'tweet-direct/persons/FETCH_LIST_SUCCESS';

const initialState = {
  list: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export const fetchListSuccess = ({ data }) => {
  const { list } = parseList(data, RESOURCE);

  return {
    type: FETCH_LIST_SUCCESS,
    list,
  };
};

export const fetchList = params => client.get('/api/persons', { params });
