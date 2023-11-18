import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateClass } from "../api/class";
import ClassInputForm from "../components/ClassInputForm";

const EditClassPage = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name") || "";
  const subject = queryParams.get("subject") || "";
  const professor = queryParams.get("professor") || "";

  const [formData, setFormData] = useState({
    id: id,
    name: name,
    subject: subject,
    professor: professor,
  });

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateClass(options);
    navigate("/classes");
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
