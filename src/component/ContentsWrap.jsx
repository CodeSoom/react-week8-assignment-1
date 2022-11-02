import styled from '@emotion/styled';

export default function ContentsWrap({ contentAlign, children }) {
  return (
    <ContentsWrapSet contentAlign={contentAlign}>
      {children}
    </ContentsWrapSet>
  );
}

const ContentsWrapSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${(props) => (props.contentAlign ? props.contentAlign : 'center')};
  width: 100%;
  padding: 32px 0;
`;
