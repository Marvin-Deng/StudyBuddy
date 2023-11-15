import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import GroupInputForm from "../components/GroupInputForm";

const EditGroupPage = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name") || "";
  const description = queryParams.get("description") || "";
  const locationValue = queryParams.get("location") || "";
  const time = queryParams.get("time") || "";
  const class_id = queryParams.get("class_id") || "";

  const [formData, setFormData] = useState({
    id: id,
    name: name,
    description: description,
    location: locationValue,
    time: time,
    class_id: class_id,
  });

  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/group/updateGroup",
        requestOptions
      );
      if (!response.ok) {
        showToast(
          "Failed to update group",
          "error"
        );
      } else {
        showToast("Study group updated!", "success");
        navigate("/");
      }
    } catch (error) {
      showToast(
        "Error: Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  return (
    <GroupInputForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditGroupPage;
