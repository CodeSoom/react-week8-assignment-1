import { TextInput } from 'react-materialize';

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <TextInput
        inputClassName="yellow-text"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        label={label}
      />
    </div>
  );
}
