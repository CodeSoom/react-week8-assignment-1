import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';


const Title = styled.h2`
  padding-bottom:15px;
`;

const Tabs = styled.ul`
  display:flex;
  width:20%;
  flex-direction:row;
  justify-content:space-between;  
`;

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Tabs>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </Tabs>
    </div>
  );
}
