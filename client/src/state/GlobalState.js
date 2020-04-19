import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
import { GET_JOBS, JOBS_ERROR } from "../constants/ActionTypes";

//Intial state
const intialState = {
  jobs: [],
  error: null,
  loading: true,
};

//Context
export const GlobalContext = createContext(intialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  //Actions
  async function getJobs() {
    try {
      const res = await axios.get("/api/v1/jobs");

      dispatch({
        type: GET_JOBS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        jobs: state.jobs,
        error: state.error,
        loading: state.loading,
        getJobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
