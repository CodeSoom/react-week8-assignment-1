import { memo } from 'react';

import styled from '@emotion/styled';

const MenuList = styled.ul({
  display: 'flex',
  marginRight: '-29px',
  flexFlow: 'wrap',
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  padding: '22px 29px 0 0',
  width: '25%',
  minHeight: '50px',

  '& button': {
    all: 'unset',
    border: `2px solid ${active ? '#555' : '#cbcbcb'}`,
    borderRadius: '40px',
    height: '50px',
    width: '100%',
    color: active ? '#000' : '#555',
    backgroundColor: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      borderColor: '#555',
      color: '#000',
    },
  },
}));

export default memo(({ regions, selectedRegion, onClick }) => {
  function handleClick(regionId) {
    return () => onClick(regionId);
  }

  return (
    <MenuList>
      {regions.map((region) => (
        <MenuItem
          key={region.id}
          active={selectedRegion
            ? region.id === selectedRegion.id
            : false}
        >
          <button
            type="button"
            onClick={handleClick(region.id)}
          >
            {region.name}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
});
