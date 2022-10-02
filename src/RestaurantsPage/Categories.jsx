import { memo } from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBowlRice,
  faPepperHot,
  faFishFins,
  faPizzaSlice,
  faCookie,
  faDrumstickBite,
} from '@fortawesome/free-solid-svg-icons';

const MenuList = styled.ul({
  display: 'flex',
  flexFlow: 'wrap',
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  padding: '22px 68px 0 0',
  minHeight: '50px',

  '& button': {
    all: 'unset',
    color: active ? '#000' : '#555',
    backgroundColor: '#fff',
    textAlign: 'center',
    cursor: 'pointer',

    '&:hover': {
      color: '#000',
    },

    '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `2px solid ${active ? '#555' : '#cbcbcb'}`,
      width: '105px',
      height: '105px',
      borderRadius: '50%',
      fontSize: '40px',

      '&:hover': {
        borderColor: '#555',
      },
    },

    '& span': {
      display: 'inline-block',
      margin: '15px 0',
    },
  },
}));

const categoryLogo = {
  한식: faBowlRice,
  중식: faPepperHot,
  일식: faFishFins,
  양식: faPizzaSlice,
  분식: faCookie,
  치킨: faDrumstickBite,
};

export default memo(({ categories, selectedCategory, onClick }) => {
  function handleClick(categoryId) {
    return () => onClick(categoryId);
  }

  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          active={selectedCategory ? category.id === selectedCategory.id : false}
        >
          <button
            type="button"
            onClick={handleClick(category.id)}
          >
            <div>
              <FontAwesomeIcon icon={categoryLogo[category.name]} />
            </div>
            <span>
              {category.name}
            </span>
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
});
