import { Card, ListGroup } from 'react-bootstrap';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <Card.Title>메뉴가 없어요!</Card.Title>
    );
  }

  return (
    <ListGroup>
      {menuItems.map((menuItem) => (
        <ListGroup.Item key={menuItem.id}>
          {menuItem.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
