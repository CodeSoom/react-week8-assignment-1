import styled from '@emotion/styled';

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <MenuList>
      {sortedReviews.map((review) => (
        <MenuItem key={review.id}>
          <section className="top">
            <h1>
              {review.name}
            </h1>
            <p>
              {review.score}
              점
            </p>
          </section>
          <section className="bottom">
            {review.description}
          </section>
        </MenuItem>
      ))}
    </MenuList>
  );
}
const MenuList = styled.div({
  width: '100%',

});

const MenuItem = styled.div({
  backgroundColor: 'skyblue',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  marginBottom: '5px',
  padding: '10px',
  borderRadius: '10px',
  '.top': {
    display: 'flex',
    marginBottom: '10px',
    '& p': {
      color: 'yellow',
      marginLeft: '10px',
      display: 'flex',
      alignItems: 'center',
    },

  },
  '.bottom': {
  },
});
