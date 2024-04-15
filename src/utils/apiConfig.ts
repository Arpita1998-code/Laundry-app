import axios from "axios";
const token = localStorage.getItem("token");

const postApiCall = async (url: string, body?: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

const getApiCall = async (url: string, body?: any) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};


const deleteApiCall = async (url: string, body?: any) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: body,
    };


    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      config
    );
    return response;
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};



const getUserApiCall = async (url: string, body?: any) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

const postUserApiCall = async (url: string, body?: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

const deleteUserApiCall = async (url: string, body?: any) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: body,
    };


    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_apiurl}/api/${url}`,
      config
    );
    return response;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export { postApiCall, getApiCall, deleteApiCall, getUserApiCall, postUserApiCall, deleteUserApiCall };
