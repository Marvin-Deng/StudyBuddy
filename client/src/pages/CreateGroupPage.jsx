import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGroup } from "../api/group"
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

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGroup(options)
    navigate("/");
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
