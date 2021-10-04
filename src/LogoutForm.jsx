import FormButton from './FormButton';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <FormButton
        type="button"
        onClick={onClick}
      >
        Log out
      </FormButton>
    </>
  );
}
