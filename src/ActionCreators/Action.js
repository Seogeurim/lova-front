import { ServerEndPoint } from "../Configs/Server";
// import * as Request from "../Utils/WebRequest";
export const TOKEN_EXPIRED = "TOKEN_EXPIRED";

export const SUCCEED_TO_MAKE_TOKEN = "SUCCEED_TO_MAKE_TOKEN";
export const FAILED_TO_MAKE_TOKEN = "FAILED_TO_MAKE_TOKEN";

export const getTokenizedSentence = params => {
  return async dispatch => {
    try {
      let response = await fetch(ServerEndPoint + "api/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      await dispatch({
        type: SUCCEED_TO_MAKE_TOKEN,
        payload: responseJson.result
      });
      return responseJson.result;
    } catch (error) {
      dispatch({
        type: FAILED_TO_MAKE_TOKEN,
        payload: { data: "NETWORK_ERROR" }
      });
    }
  };
};
