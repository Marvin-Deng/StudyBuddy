import { fetchResponse, fetchFilteredData } from "./api";
import { showToast } from "../utils/toastUtils";

export const getGroupById = async (id) => {
  try {
    const response = await fetchResponse(`group/${id}`);
    if (!response.ok) {
      showToast("Error getting group", "error");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllGroups = async () => {
  try {
    const response = await fetchResponse(`group/getAll`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all groups. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error in getAllGroups: ${error.message}`);
  }
};

export const filterGroups = async (searchString) => {
  return fetchFilteredData(`group/search/${searchString}`, searchString);
}

export const createGroup = async (options) => {
  try {
    const response = await fetchResponse("group/createGroup", options);
    if (!response.ok) {
      showToast(
        "Invalid input (Group Name, Time, and Location are required) ",
        "error"
      );
    } else {
      showToast("Study group created!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const updateGroup = async (options) => {
  try {
    const response = await fetchResponse("group/updateGroup", options);
    if (!response.ok) {
      showToast("Failed to update group", "error");
    } else {
      showToast("Study group updated!", "success");
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};

export const deleteGroup = async (id, options) => {
  try {
    const response = await fetch(`deleteGroup/${id}`, options);
    if (!response.ok) {
      showToast("An error occurred.", "error");
      throw new Error(`Failed to delete group. Status: ${response.status}`);
    }
    showToast("Group deleted", "success");
    return await response.json();
  } catch (error) {
    throw new Error("Error deleting group:", error);
  }
};

export const getStudentsInGroup = async (id) => {
  try {
    const response = await fetchResponse(`group/studentsInGroup/${id}`);
    if (!response.ok) {
      showToast("Error getting students in a group", "error");
    } else {
      return await response.json();
    }
  } catch (error) {
    showToast("Error: Something went wrong. Please try again later.", "error");
    throw error;
  }
};
