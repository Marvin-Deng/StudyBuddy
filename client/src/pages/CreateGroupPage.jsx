import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import GroupInputForm from "../components/GroupInputForm";

const CreateGroupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    time: "",
    class_id: "",
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/group/createGroup",
        requestOptions
      );
      if (!response.ok) {
        showToast(
          "Invalid input (Group Name, Time, and Location are required) ",
          "error"
        );
      } else {
        showToast("Study group created!", "success");
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

export default CreateGroupPage;
