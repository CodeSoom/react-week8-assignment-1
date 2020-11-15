import styled from '@emotion/styled';

const List = styled.li({
  listStyle: 'none',
});

const Button = styled.button(({ active }) => ({
  width: '93px',
  marginBottom: '10px',
  lineHeight: '38px',
  border: '1px solid #222228',
  backgroundColor: active ? '#09d2e5' : 'transparent',
  fontSize: '13px',
  color: '#222228',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f9f9fa',
  },
}));

const Anchor = styled.a({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '15px',
  padding: '20px',
  borderBottom: '1px solid #e6e6eb',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: '#f9f9fa',
  },
});

const Image = styled.img({
  width: '100px',
  height: '100px',
  marginRight: '20px',
});

const RestaurantWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100px',
  justifyContent: 'space-around',
});

const RestaurantName = styled.h3({
  fontSize: '18px',
});

const RestaurantDescription = styled.p({
  fontSize: '13px',
  color: '#222228',
});


export {
  List,
  Button,
  Anchor,
  Image,
  RestaurantWrapper,
  RestaurantName,
  RestaurantDescription,
};
