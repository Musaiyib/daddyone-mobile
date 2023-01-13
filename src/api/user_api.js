import ApiManager from "./ApiManager";

export const user_register = async (data) => {
  console.log(data);
  try {
    const { data: result } = await ApiManager("/register", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const user_login = async (data) => {
  try {
    const { data: result } = await ApiManager("/login", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
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
    return error.response.data;
  }
};
