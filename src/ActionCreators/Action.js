import { ServerEndPoint } from "../Configs/Server";

export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

export const SUCCEED_TO_POST_ESSAY = "SUCCEED_TO_POST_ESSAY";
export const FAILED_TO_POST_ESSAY = "FAILED_TO_POST_ESSAY";

export const SUCCEED_TO_GET_ESSAY_SCORE = "SUCCEED_TO_GET_ESSAY_SCORE";
export const FAILED_TO_GET_ESSAY_SCORE = "FAILED_TO_GET_ESSAY_SCORE";

export const SUCCEED_TO_GET_QUOTED_SENTENCE = "SUCCEED_TO_GET_QUOTED_SENTENCE";
export const FAILED_TO_GET_QUOTED_SENTENCE = "FAILED_TO_GET_QUOTED_SENTENCE";

export const postEssay = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint + "api/essay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          essay: params.essay
        })
      });
      let responseJson = await response.json();
      await dispatch({
        type: SUCCEED_TO_POST_ESSAY,
        payload: responseJson.id
      });
      return responseJson.id;
    } catch (error) {
      dispatch({
        type: FAILED_TO_POST_ESSAY,
        payload: { data: "NETWORK_ERROR" }
      });
    }
  };
};

export const getEssayScore = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint + `api/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      await dispatch({
        type: SUCCEED_TO_GET_ESSAY_SCORE,
        payload: responseJson.score
      });
      return responseJson.score;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_ESSAY_SCORE,
        payload: { data: "NETWORK_ERROR" }
      });
    }
  };
};

export const getQuotedSentence = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint + `api/ec/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      await dispatch({
        type: SUCCEED_TO_GET_ESSAY_SCORE,
        payload: responseJson.results
      });
      return responseJson.results;
    } catch (error) {
      dispatch({
        type: FAILED_TO_GET_ESSAY_SCORE,
        payload: { data: "NETWORK_ERROR" }
      });
    }
  };
};
