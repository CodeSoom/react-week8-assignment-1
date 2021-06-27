import styled from '@emotion/styled';

import colors from './style/colors';
import Title from './style/Title';

const Body = styled.div({
  width: '90%',
  margin: '8em auto',
  textAlign: 'center',
});

const Text = styled.p({
  padding: '.5em 4em',
  color: `${colors.text_secondary}`,
  fontSize: '.8em',
});

export default function AboutPage() {
  return (
    <Body>
      <Title>이 서비스에 대해서...</Title>
      <Text>이 서비스는 영국에서 시작되었습니다.</Text>
      <Text>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Text>
    </Body>
  );
}
