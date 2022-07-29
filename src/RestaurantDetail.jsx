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
  width: '90%',

  padding: '10px',
  borderRadius: '10px',

  backgroundColor: 'pink',

  color: '#FFFFFF',

  textAlign: 'center',
  '.adress': {
    margin: '0 0 10px 0',
    fontSize: '15px',
    textAlign: 'right',
  },

  '.menu': {
    margin: '0',
    padding: '10px',
    backgroundColor: 'white',
    color: '#B2EBF4',
    textAlign: 'left',
  },
});
