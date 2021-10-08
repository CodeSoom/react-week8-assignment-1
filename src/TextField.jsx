import styled from '@emotion/styled';

const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '.5em',
  '& input': {
    width: '10em',
    border: 'none',
    borderBottom: '1px solid black',
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
    <Form>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Form>
  );
}
