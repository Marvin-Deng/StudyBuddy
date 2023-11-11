import { Form } from "react-bootstrap";

const InputForm = ({
  rows,
  title,
  inputName,
  formField,
  handleInputChange,
  placeholder,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-bold"> {title} </Form.Label>
      {rows > 1 ? (
        <Form.Control
          as="textarea"
          placeholder={placeholder}
          name={inputName}
          rows={rows}
          value={formField}
          onChange={handleInputChange}
        />
      ) : (
        <Form.Control
          type="text"
          placeholder={placeholder}
          name={inputName}
          value={formField}
          onChange={handleInputChange}
        />
      )}
    </Form.Group>
  );
};

export default InputForm;
