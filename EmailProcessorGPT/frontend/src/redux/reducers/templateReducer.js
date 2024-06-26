import { FETCH_TEMPLATES_START, FETCH_TEMPLATES_SUCCESS, FETCH_TEMPLATES_FAILURE } from '../actions/templateActions';

const initialState = {
  templates: [],
  loading: false,
  error: null,
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATES_START:
      return { ...state, loading: true, error: null };
    case FETCH_TEMPLATES_SUCCESS:
      return { ...state, loading: false, templates: action.payload };
    case FETCH_TEMPLATES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default templateReducer;
