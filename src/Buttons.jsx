import React from 'react';

const Buttons = React.memo(({ buttons, handleClick, selected }) => (
  <ul>
    {buttons.map(({ id, name }) => (
      <li key={id}>
        <button
          type="button"
          onClick={() => handleClick(id)}
        >
          {name}
          {selected && (
            <>
              {id === selected.id ? '(V)' : null}
            </>
          )}
        </button>
      </li>
    ))}
  </ul>
));

export default Buttons;
