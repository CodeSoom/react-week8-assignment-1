import styled from '@emotion/styled';

import React from 'react';

// ToDo: 평점 1~5점까지 제한, 화살표 숨기기 박스 너비 줄이기
const Box = styled.div({
  marginBottom: '12px',
  '& label': {
    fontSize: '18px',
    fontWeight: '700',
    marginRight: '12px',
  },
  '& input': {
    padding: '8px',
    width: '70%',
    height: '24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
  },
});

function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <Box>
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
    </Box>
  );
}

export default React.memo(TextField);
