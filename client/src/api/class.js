import { fetchResponse, fetchFilteredData } from "./api";
import { showToast } from "../utils/toastUtils";

export const getClassById = async (id) => {
  try {

    const response = await fetchResponse(`class/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch class with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllClasses = async () => {
  try {
    const response = await fetchResponse("class/getAll");
    if (!response.ok) {
      showToast(
        "Invalid input (Class Name, Subject, and Professor are required) ",
        "error"
      );
    } else {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const filterClasses = async (searchString) => {
  return fetchFilteredData(`class/search/${searchString}`, searchString);
}

export const createClass = async (options) => {
  try {
    const response = await fetchResponse("class/createClass", options);
    if (!response.ok) {
      showToast(
        "Invalid input (Class Name, Subject, and Professor are required) ",
        "error"
      );
    } else {
      showToast("Class created!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const updateClass = async (options) => {
  try {
    const response = await fetchResponse("class/updateClass", options);
    if (!response.ok) {
      showToast("Failed to update class", "error");
    } else {
      showToast("Class updated!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const deleteClass = async (id, options) => {
  try {
    const response = await fetchResponse(`class/deleteClass/${id}`, options);
    if (!response.ok) {
      showToast("Failed to delete class", "error");
      throw new Error(`Failed to delete class with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error deleting class:", error);
  }
};
