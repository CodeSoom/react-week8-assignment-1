import styled from '@emotion/styled';

import React from 'react';

const Wrapper = styled.div({
  display: 'flex',
  '& label': {
    flexShrink: 0,
    minWidth: '70px',
  },
  '& input': {
    flexGrow: 1,
  },
});

const TextField = React.memo(({
  label, type = 'text', name, value, onChange,
}) => {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
});

export default TextField;
