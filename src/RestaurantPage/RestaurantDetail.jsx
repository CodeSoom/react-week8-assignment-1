import { memo } from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Header = styled.header({
  paddingBottom: '30px',
  borderBottom: '1px solid #e9e9e9',

  '& h2': {
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e9e9e9',
    fontSize: '1.8em',
  },
});

const Information = styled.div({
  display: 'flex',
  paddingBottom: '10px',
  fontSize: '1em',
  textAlign: 'left',
  verticalAlign: 'top',

  '& h3': {
    paddingRight: '10px',
    width: '110px',
    color: '#555',
  },
});

export default memo(({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <Header>
      <h2>{name}</h2>
      <Information>
        <h3>주소</h3>
        <div>{address}</div>
      </Information>
      <Information>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </Information>
    </Header>
  );
});
