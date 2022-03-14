import LoginFormContainer from '../containers/LoginFormContainer';
import { PageHeader } from '../styles/common';

export default function LoginPage() {
  return (
    <div>
      <PageHeader>Log In</PageHeader>
      <LoginFormContainer />
    </div>
  );
}
