import { GET_JOBS, SEARCH_FILTER, JOBS_ERROR } from "../constants/ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        jobs: state.jobs.filter(job =>
          job.toLowerCase().includes(action.searchTerm)
        ),
      };
    case JOBS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
