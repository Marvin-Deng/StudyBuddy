import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateGroup } from "../api/group";
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

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGroup(options);
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

export default EditGroupPage;
