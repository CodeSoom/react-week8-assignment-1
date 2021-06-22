import styled from '@emotion/styled';

const TextFieldContainer = styled.div({
  margin: '2em auto',
  padding: '.5em 1em',
  display: 'inline-block',
  '& label': {
    textAlign: 'center',
    display: 'inline-block',
    width: '90px',
    fontsize: '.5em',
    fontWeight: '700',
    padding: '.5em',
    color: '#55462b',
  },
  '& input': {
    backgroundColor: 'transparent',
    color: '#777a75',
    outline: '#d8ddbe auto 2px',
    fontWeight: '500',
    padding: '.2em .5em',
    width: '18em',
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
    <TextFieldContainer>
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
    </TextFieldContainer>
  );
}
