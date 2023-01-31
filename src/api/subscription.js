import ApiManager from "./ApiManager";

/**
 * Makes a POST request to the API to buy data
 * @param {Object} data - The data to send to the API
 * @returns {Object} The API response
 */
export const buyData = async (data) => {
  try {
    // Make the API request
    const response = await ApiManager("/subscription/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    // Extract the data from the response
    const { data: result } = response;
    return result;
  } catch (error) {
    // Log the error to the console
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};

/**
 * Makes a POST request to the API to buy airtime
 * @param {Object} data - The data to send to the API
 * @returns {Object} The API response
 */
export const buyAirtime = async (data) => {
  try {
    const response = await ApiManager("/subscription/airtime", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    const { data: result } = response;
    return result;
  } catch (error) {
    console.error(error.response.data.error);
    return error.response.data.error;
  }
};

/**
 * Makes a POST request to the API to buy data
 * @param {Object} data - The data to send to the API
 * @returns {Object} The API response
 */
export const getAirtimePlan = async () => {
  try {
    // Make the API request
    const response = await ApiManager("/subscription/airtime/addplan", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // Extract the data from the response
    const { data: result } = response;
    return result;
  } catch (error) {
    // Log the error to the console
    console.error(error);
    return error;
  }
};

/**
 * Makes a POST request to the API to buy data
 * @param {Object} data - The data to send to the API
 * @returns {Object} The API response
 */
export const getDataPlan = async () => {
  try {
    // Make the API request
    const response = await ApiManager("/subscription/data/addplan", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // Extract the data from the response
    const { data: result } = response;
    return result;
  } catch (error) {
    // Log the error to the console
    console.error(error);
    return error;
  }
};
