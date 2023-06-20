import styled from '@emotion/styled';

const InputBox = styled.div`
  display: grid; 
  grid-template-columns: 1fr 10fr; 
  align-items: center; 

`;

const Input = styled.input`
  width: 98%;
  height: 35px;
  border: none; 
  background: transparent;
  border: 1px solid #000;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export default function TextField({
  label, type = 'text', name, value, onChange, placeholder = '',
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <InputBox>
      <label htmlFor={id}>
        {label}
      </label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputBox>
  );
}
