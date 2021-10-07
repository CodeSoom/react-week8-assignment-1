import styled from '@emotion/styled';

const Form = styled.div({
  marginBottom: '.5em',
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    border: 'none',
    borderBottom: '1px solid black',
    width: '10em',
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
