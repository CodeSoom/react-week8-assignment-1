import styled from '@emotion/styled';

const RestaurantMenuList = styled.ul({
  margin: '0 .8em',
  padding: '1.5em',
  border: '.1em dotted #424242',
  listStyle: 'none',
  borderRadius: '.5em',
  '& > li:not(:last-child)': {
    marginBottom: '1em',
  },
});

export default RestaurantMenuList;
