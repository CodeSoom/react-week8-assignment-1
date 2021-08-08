import styled from '@emotion/styled';

import colors from './style/colors';

const ReviewField = styled.div({
  display: 'inline-block',
  margin: '2em auto',
  padding: '.5em 0',
  '& label': {
    display: 'inline-block',
    width: '90px',
    padding: '.5em 0',
    color: `${colors.text_primary}`,
    fontSize: '.5em',
    fontWeight: '700',
    textAlign: 'center',
  },
  '& input': {
    width: '13em',
    padding: '.2em',
    outline: `${colors.text_secondary} auto 2px`,
    color: `${colors.button_gray020}`,
    fontWeight: '500',
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
    <ReviewField>
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
    </ReviewField>
  );
}
