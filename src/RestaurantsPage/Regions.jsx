import { memo } from 'react';

import MenuList from '../styles/MenuList';
import MenuItem from '../styles/MenuItem';

export default memo(({ regions, selectedRegion, onClick }) => {
  function handleClick(categoryId) {
    return () => onClick(categoryId);
  }

  return (
    <MenuList>
      {regions.map((region) => (
        <MenuItem key={region.id}>
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
        </MenuItem>
      ))}
    </MenuList>
  );
});
