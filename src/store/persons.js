const FETCH_SINGLE_START = 'tweet-direct/persons/FETCH_SINGLE';
const FETCH_SINGLE_SUCCESS = 'tweet-direct/persons/FETCH_SINGLE_SUCCESS';
const FETCH_SINGLE_ERROR = 'tweet-direct/persons/FETCH_SINGLE_ERROR';

const initialState = {
  loaded: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SINGLE_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null,
      };
    default:
      return state;
  }
};

export const fetchSingle = () => ({
  types: [FETCH_SINGLE_START, FETCH_SINGLE_SUCCESS, FETCH_SINGLE_ERROR],
  promise: client => client.get('/api/persons'),
});
