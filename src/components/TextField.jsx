import { memo } from 'react';

import styled from '@emotion/styled';

const Label = styled.label({
  marginBottom: '8px',
  fontSize: '14px',
});

const Input = styled.input({
  margin: '4px 0 16px',
  padding: '5px 12px',
  border: '1px solid #DBDBDB',
  borderRadius: '6px',
  width: '100%',
  transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
  transitionProperty: 'border-color',

  ':focus-visible': {
    borderColor: '#000',
  },
});

export default memo(({
  label, type = 'text', name, value, onChange,
}) => {
  const id = `input-${name}`;

  function handleChange({ target }) {
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
});
