import styled from '@emotion/styled';

export default function Title({ children }) {
  return (
    <TitleSet>
      {children}
    </TitleSet>
  );
}

const TitleSet = styled.h2`
  padding: 32px 0 16px;
  margin: 0;
`;
