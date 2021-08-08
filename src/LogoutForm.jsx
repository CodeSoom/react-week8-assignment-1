import Button from './Button';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
        background="#dc3545"
        hoverBackground="#c82333"
      >
        Log out
      </Button>
    </>
  );
}
