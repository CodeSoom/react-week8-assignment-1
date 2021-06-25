const SelectButton = ({ onClick, name, isSelected }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {name}
    {isSelected ? '(V)' : null}
  </button>
);

export default SelectButton;
