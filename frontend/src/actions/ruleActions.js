// import axios from "axios";
import http from "../utils/http-common";

import {
  ADD_RULE,
  GET_ERRORS,
  RULE_LOADING,
  GET_RULE,
  GET_RULES,
  UPDATE_RULE,
} from "./types";

// Add Post
export const addRule = (postData, history) => (dispatch) => {
  http
    .post("/rules", postData)
    .then((res) => {
      dispatch({
        type: ADD_RULE,
        payload: res.data,
      });
      history.push("/questions");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

// Get Posts
export const getRules = () => (dispatch) => {
  dispatch(setRuleLoading());
  http
    .get("/rules")
    .then((res) =>
      dispatch({
        type: GET_RULES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RULES,
        payload: null,
      })
    );
};

export const getRule = (id) => (dispatch) => {
  dispatch(setRuleLoading());
  http
    .put(`/rules/${id}`)
    .then((res) =>
      dispatch({
        type: GET_RULE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RULE,
        payload: null,
      })
    );
};

export const updateRule = (id, body) => (dispatch) => {
  dispatch(setRuleLoading());
  http
    .put(`/rules/${id}`, body)
    .then((res) =>
      dispatch({
        type: UPDATE_RULE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_RULE,
        payload: null,
      })
    );
};

export const setRuleLoading = () => {
  return {
    type: RULE_LOADING,
  };
};
