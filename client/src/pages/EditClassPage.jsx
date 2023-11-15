import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toastUtils";
import ClassInputForm from "../components/ClassInputForm";
import queryString from 'query-string';
const EditClassPage = () => {
    
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id") || "";
  const name = queryParams.get("name") || "";
  const subject = queryParams.get("subject") || "";
  const professor = queryParams.get("professor") || "";
useEffect(() => {
    console.log('id',id)
    console.log('search',location.search)
})
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    subject: subject,
    professor: professor,
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
        "http://localhost:3001/class/updateGroup",
        requestOptions
      );
      if (!response.ok) {
        showToast(
          "Failed to update class",
          "error"
        );
      } else {
        showToast("Class updated!", "success");
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
    <ClassInputForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditClassPage;
