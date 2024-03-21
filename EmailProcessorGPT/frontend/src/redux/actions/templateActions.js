// In /redux/actions/templateActions.js

// Action Types
const FETCH_TEMPLATES_START = 'FETCH_TEMPLATES_START';
const FETCH_TEMPLATES_SUCCESS = 'FETCH_TEMPLATES_SUCCESS';
const FETCH_TEMPLATES_FAILURE = 'FETCH_TEMPLATES_FAILURE';

// Action Creators
export const fetchTemplatesStart = () => ({
  type: FETCH_TEMPLATES_START,
});

export const fetchTemplatesSuccess = templates => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: templates,
});

export const fetchTemplatesFailure = error => ({
  type: FETCH_TEMPLATES_FAILURE,
  payload: error,
});

// Thunk Action Creator
export const fetchTemplates = () => {
  return async dispatch => {
    dispatch(fetchTemplatesStart());
    try {
      // Assuming an API function getTemplates() that returns a promise
      const templates = await getTemplates();
      dispatch(fetchTemplatesSuccess(templates));
    } catch (error) {
      dispatch(fetchTemplatesFailure(error.toString()));
    }
  };
};
