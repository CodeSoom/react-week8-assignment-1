import { memo } from 'react';

function RegionItem({ region, onClick, isSelected }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(region.id)}
      >
        {region.name}
        {isSelected ? '(V)' : null}
      </button>
    </li>
  );
}

export default memo(RegionItem);
