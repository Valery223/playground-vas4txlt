import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:9000",
});

export const fetchSearchData = async () => {
  try {
    const response = await API.get("");
    return response.data[0];
  } catch (error) {
    console.error(error);
    console.log("pipipapa!!!");
    throw error;
  }
};
