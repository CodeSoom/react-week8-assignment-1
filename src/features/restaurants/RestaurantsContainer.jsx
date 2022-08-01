import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { restaurantsSelector } from './restaurantsSlice';

const Container = styled.div({
  marginTop: '3rem',
});

const Title = styled.h3({
  margin: '0 0 1rem 0',
  fontSize: '2rem',
});

const List = styled.ul({
  display: 'flex',
  padding: '2rem 0',
});

const Item = styled.li({
  margin: '0 1rem 1rem 0',
  maxWidth: '30rem',

  '& > a': {
    display: 'block',
    padding: '1rem 1.5rem',
    border: '2px solid #7950f2',
    borderRadius: '0.5rem',
    textAlign: 'center',
    color: '#7950f2',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});

const Message = styled.p({
  lineHeight: 1.5,
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(restaurantsSelector);

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  if (!restaurants?.length) {
    return (
      <Message>
        레스토랑 목록을 조회하지 못했습니다.
      </Message>
    );
  }

  return (
    <Container>
      <Title>레스토랑 목록</Title>
      <List>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id}>
            <a href={`/restaurants/${restaurant.id}`} onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </Item>
        ))}
      </List>
    </Container>
  );
}
