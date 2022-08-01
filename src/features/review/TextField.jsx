import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});

const Label = styled.label({
  marginRight: '0.5rem',
  color: '#000000',
  fontSize: '1.6rem',
  fontWeight: 'bold',
});

const Input = styled.input({
  padding: '0.5rem',
  border: '1px solid #000000',
  transition: 'all 0.5s',

  '&:focus': {
    outline: 'none',
    borderColor: '#868e96',
  },

  '&:hover': {
    borderColor: '#868e96',
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
    <Container>
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
    </Container>
  );
}
