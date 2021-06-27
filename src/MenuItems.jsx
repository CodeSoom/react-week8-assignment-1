import React from 'react';

import styled from '@emotion/styled';

import colors from './style/colors';

const NoItem = styled.p({
  height: '20em',
  margin: '0 auto',
  padding: '0',
  borderBottom: `${colors.border_green} solid 1px`,
  color: `${colors.text_primary}`,
  fontSize: '.5em',
  textAlign: 'center',
  lineHeight: '10em',
});

const List = styled.ul({
  margin: '0 auto',
  padding: '1em 2em',
  borderBottom: `${colors.border_green} solid 1px`,
});

const Item = styled.li({
  display: 'inline-block',
  width: '20%',
  height: '4em',
  margin: '1em 2.5em',
  color: `${colors.text_primary}`,
  fontSize: '.7em',
  textAlign: 'center',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <NoItem>메뉴가 없어요!</NoItem>
    );
  }

  return (
    <List>
      {menuItems.map(({ id, name }) => (
        <Item key={id}>
          {name}
        </Item>
      ))}
    </List>
  );
}

export default React.memo(MenuItems);
