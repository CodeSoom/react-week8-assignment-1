import styled from '@emotion/styled';

const TextFieldContainer = styled.div`
  border-left: 3px solid #ddd;
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  padding: 8px;
`;

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <TextFieldContainer>
      <Label htmlFor={id}>
        {label}
      </Label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </TextFieldContainer>
  );
}
