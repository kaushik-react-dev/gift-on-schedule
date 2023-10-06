import axios from "axios";

export const ConfirmDetail = async ({ baseURL, data }: any) => {
  try {
    await axios
      .post(baseURL, data, {
        headers: { Authorization: "Bearer 7e008bc659fe4ad68fc640c62c1805e8" },
      })
      .then((response) => {
          console.log("response = ", response, response?.data);
          return response?.data;
      })
      .catch((error) => {
        console.log("0000", error);
        return error;
      });
  } catch (error) {
    console.log(error);
  }
};
