/*
 * Reducer.js
 */

import {
  TOKEN_EXPIRED,
  SUCCEED_TO_POST_ESSAY,
  FAILED_TO_POST_ESSAY,
  SUCCEED_TO_GET_ESSAY_SCORE,
  FAILED_TO_GET_ESSAY_SCORE,
  SUCCEED_TO_GET_QUOTED_SENTENCE,
  FAILED_TO_GET_QUOTED_SENTENCE,
  SUCCEED_TO_POST_REFERENCE,
  FAILED_TO_POST_REFERENCE
} from "../ActionCreators/Action";

import { combineReducers } from "redux";

const initialState = {
  data: "",
  token: localStorage.getItem("token")
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_EXPIRED:
      return Object.assign({}, state, {
        token: null
      });
    case SUCCEED_TO_POST_ESSAY:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case FAILED_TO_POST_ESSAY:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case SUCCEED_TO_GET_ESSAY_SCORE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case FAILED_TO_GET_ESSAY_SCORE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case SUCCEED_TO_GET_QUOTED_SENTENCE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case FAILED_TO_GET_QUOTED_SENTENCE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case SUCCEED_TO_POST_REFERENCE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });
    case FAILED_TO_POST_REFERENCE:
      localStorage.setItem("token", action.payload);
      return Object.assign({}, state, {
        token: action.payload
      });

    default:
      return state;
  }
};

const Reducer = combineReducers({ reducer });
export default Reducer;
