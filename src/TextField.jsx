import { Form } from 'react-bootstrap';

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <Form.Group>
      <Form.Label htmlFor={id}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
