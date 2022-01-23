import React from 'react';

function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  // THINK:
  // 이 부분은 굳이 memoized 안해도될듯
  // 왜냐하면 해당 부분이 변경되면 handleChange 는 캐시될 필요 없음
  const handleChange = (event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  };

  return (
    <div>
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
    </div>
  );
}

export default React.memo(TextField);
