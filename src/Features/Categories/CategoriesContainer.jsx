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

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Item = styled.li`
  width: 180px;
  height: 65px;
  border: 1px solid #000;
  text-align: center;
  line-height: 65px;

  & button {
    width: 180px;
    height: 65px;
    text-align: center;
  }
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
  return (
    <>
      <p>카테고리</p>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              <FontAwesomeIcon icon={categoryLogo[category.name]} />
              {category.name}
              {selectedCategory ? (
                <>
                  {category.id === selectedCategory.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </>
  );
}
