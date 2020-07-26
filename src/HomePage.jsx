import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  backgroundColor: '#32e0c4',
  color: '#393e46',
  fontSize: '2em',
  padding: '1em 1em',
});

const List = styled.ul({
  margin: 0,
  padding: '.5em 1em',
  listStyle: 'none',
});

const Item = styled.li({
  marginTop: '.3em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

function HomePage() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Title>
                Home
              </Title>
            </td>
            <td>
              <List>
                <Item>
                  <Link to="/about">About</Link>
                </Item>
                <Item>
                  <Link to="/login">Log in</Link>
                </Item>
                <Item>
                  <Link to="/restaurants">Restaurants</Link>
                </Item>
                <Item>
                  <Link to="/xxx">멸망의 길</Link>
                </Item>
              </List>
            </td>
          </tr>
        </tbody>
      </table>
      <div />
      <div />
    </div>
  );
}

export default React.memo(HomePage);
