import styled from '@emotion/styled';
import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <Wrap>
        {name}
        <p className="adress">
          주소:
          {address}
        </p>

        <p className="menu">메뉴</p>
        <MenuItems menuItems={menuItems} />
      </Wrap>

    </Container>
  );
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Wrap = styled.h2({
  borderRadius: '10px',
  width: '90%',
  backgroundColor: 'pink',
  padding: '10px',
  textAlign: 'center',
  color: 'white',

  '.adress': {
    fontSize: '15px',
    textAlign: 'right',
    margin: '0',
    marginBottom: '10px',
  },

  '.menu': {
    background: 'white',
    color: 'skyblue',
    textAlign: 'left',
    margin: '0',
    padding: '10px',
  },
});
