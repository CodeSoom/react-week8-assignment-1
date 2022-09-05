import styled from '@emotion/styled';

const Container = styled.div({
  marginBottom: '6px',
});

const Label = styled.label({
  display: 'inline-block',
  width: '75px',
  color: '#333',
});

const Input = styled.input({
  height: '25px',
  border: '1px solid #AAA',
  borderRadius: '3px',
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
