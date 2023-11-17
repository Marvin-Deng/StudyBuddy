import { fetchResponse, fetchFilteredData } from "./api";
import { showToast } from "../utils/toastUtils";

export const getStudentById = async () => {
  try {
    const response = await fetchResponse(`student/${id}`);
    if (!response.ok) {
      throw error;
    } else {
      return await response.json();
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await fetchResponse("student/getAll");
    if (!response.ok) {
      throw error;
    }
    return await response.json();
  } catch {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const filterStudents = async (searchString) => {
  return fetchFilteredData(`student/search/${searchString}`, searchString);
}

export const createStudent = async (options) => {
  try {
    const response = await fetchResponse("student/createStudent", options);
    if (!response.ok) {
      showToast(
        "Invalid input (Name, School, Email, and Grad Year are required) ",
        "error"
      );
    } else {
      showToast("Student created!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const joinGroup = async (options) => {
  try {
    const response = await fetchResponse(`student/joinGroup`, options);
    if (!response.ok) {
      showToast("Error joining group.", "error");
    } else {
      showToast("Class joined!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const leaveGroup = async (options) => {
  try {
    const response = await fetchResponse("student/leaveGroup", options);
    if (!response.ok) {
      showToast("An error occured.", "error");
    } else {
      showToast("Student removed", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};
