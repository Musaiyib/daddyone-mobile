import ApiManager from "./ApiManager";

export const userTrx = async (data) => {
  try {
    const { data: result } = await ApiManager(`/transaction/${data._id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      timeout: 10000, // set timeout to 10 seconds
    });
    return result;
  } catch (error) {
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};
