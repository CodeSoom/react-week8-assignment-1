import { Card } from 'react-bootstrap';
import { css } from '@emotion/css';

export default function AboutPage() {
  return (
    <Card className={css`
      max-width: 1024px;
      margin: 20px auto;
    `}
    >
      <Card.Header>
        <Card.Title>

          <h2>이 서비스에 대해서...</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>

        <Card.Text>이 서비스는 영국에서 시작되었습니다.</Card.Text>
        <Card.Text>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Card.Text>
      </Card.Body>
    </Card>
  );
}
