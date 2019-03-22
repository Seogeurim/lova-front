import { ServerEndPoint } from "../Configs/Server";

export const getData = async (url, params) => {
  try {
    let response = await fetch(ServerEndPoint + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": params.props.token && params.props.token
      }
    });
    let responseJson = await response.json();
    if (response.status === 403) {
      params.props.history.replace({
        pathname: "/"
      });
      return "token_expired";
    } else {
      return responseJson;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (url, params) => {
  try {
    let response = await fetch(ServerEndPoint + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": params.props.token
      },
      body: JSON.stringify(params.body && params.body)
    });
    let responseJson = await response.json();
    if (response.status === 406) {
      params.props.history.replace({
        pathname: "/"
      });
      return "token_expired";
    } else {
      return responseJson;
    }
  } catch (error) {
    console.error(error);
  }
};
