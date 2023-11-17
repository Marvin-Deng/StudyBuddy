import { showToast } from "../utils/toastUtils";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchResponse = async (endpoint, options = {}) => {
  try {
    return await fetch(`${BASE_URL}/${endpoint}`, options);
  } catch (error) {
    throw error;
  }
};

export const fetchFilteredData = async (endpoint, searchString) => {
  try {
    const response = await fetchResponse(endpoint);
    const data = await response.json();
    if (data.length === 0 || data.length === undefined) {
      showToast(`No results found for "${searchString}"`, "error");
    } else {
     
      showToast(`Showing results for "${searchString}"`, "success");
      return data
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw new Error(error)
  }
};
