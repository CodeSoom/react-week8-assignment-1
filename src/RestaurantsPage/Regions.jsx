import { memo } from 'react';

export default memo(({ regions, selectedRegion, onClick }) => {
  function handleClick(categoryId) {
    return () => onClick(categoryId);
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
});
