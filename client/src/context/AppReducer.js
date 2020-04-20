import { GET_JOBS, SEARCH_FILTER, JOBS_ERROR } from "../constants/ActionTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: payload,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        jobs: payload,
      };
    case JOBS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
