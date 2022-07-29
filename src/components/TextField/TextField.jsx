import styled from '@emotion/styled';

const Label = styled.label({
  display: 'block',
  marginBottom: '.2rem',
  fontWeight: 500,
});

const Input = styled.input({
  padding: '.4rem',
  border: '.5px solid #AAAAAA',
  borderRadius: '.375rem',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 1px #B2EBF4',
  },
});

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
