import React from 'react';

import styled from '@emotion/styled';

import { BiMessageSquareError } from 'react-icons/bi';

import { PageTop } from './style/layout';

const Icon = styled.span({
  marginLeft: '0.5rem',
});

export default function NotFoundPage() {
  return (
    <PageTop>
      <h2>
        404 Not Found
        {' '}
        <Icon>
          <BiMessageSquareError />
        </Icon>
      </h2>
    </PageTop>
  );
}
