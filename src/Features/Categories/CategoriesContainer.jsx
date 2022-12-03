import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBowlFood,
  faPepperHot,
  faFishFins,
  faPizzaSlice,
  faCookie,
  faDrumstickBite,
  faCandyCane,
} from '@fortawesome/free-solid-svg-icons';

import {
  selectCategory,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';
import MenuItem from '../../styles/MenuItem';
import MenuList from '../../styles/MenuList';
import MenuTitle from '../../styles/MenuTitle';

const CategoryItem = styled.div`
  margin-left: 1.5rem;
`;

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  const categoryLogo = {
    한식: faBowlFood,
    중식: faPepperHot,
    일식: faFishFins,
    양식: faPizzaSlice,
    분식: faCookie,
    과자: faCandyCane,
    치킨: faDrumstickBite,
  };

  const newCategories = [...categories].splice(0, 7);
  return (
    <>
      <MenuTitle>카테고리</MenuTitle>
      <MenuList>
        {newCategories.map((category) => (
          <MenuItem
            key={category.id}
            active={selectedCategory && category.id === selectedCategory.id}
          >
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              <FontAwesomeIcon icon={categoryLogo[category.name]} />
              <CategoryItem>
                {category.name}
                {selectedCategory ? (
                  <>
                    {category.id === selectedCategory.id ? '(V)' : null}
                  </>
                ) : null}
              </CategoryItem>
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}
