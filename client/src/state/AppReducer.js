import { GET_JOBS, JOBS_ERROR } from "../constants/ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
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
