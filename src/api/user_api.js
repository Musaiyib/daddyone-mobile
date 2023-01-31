import ApiManager from "./ApiManager";

export const user_register = async (data) => {
  try {
    const { data: result } = await ApiManager("/users/register", {
      method: "POST",
      headers: {
        // "content-type": "application/x-www-form-urlencoded",
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};

export const user_login = async (data) => {
  try {
    const { data: result } = await ApiManager("/users", {
      method: "POST",
      headers: {
        // "content-type": "application/x-www-form-urlencoded",
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};

export const user_balance = async (id) => {
  try {
    const { data: result } = await ApiManager(`/users/wallet/balance/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.error("error", error.response.data.error);
    return error.response.data.error;
  }
};

export const user_forgot_password = async (data) => {
  try {
    const { data: result } = await ApiManager("/forgot", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    return result;
  } catch (error) {
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};
