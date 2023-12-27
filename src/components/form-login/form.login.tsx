import { SyntheticEvent, useEffect } from 'react';
import './form.login.scss';
import { LoginUser } from '../../model/user';
import { useUsers } from '../../hooks/use.users';
import { useNavigate } from 'react-router-dom';

export function FormLogin() {
  const { login, loggedUser } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser) {
      navigate('/');
    }
  }, [loggedUser]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formLoginElement = event.target as HTMLFormElement;
    const data = {
      email: (formLoginElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      password: (
        formLoginElement.elements.namedItem('password') as HTMLInputElement
      ).value,
    } as LoginUser;

    login(data);
  };

  return (
    <section className="section-login">
      <div className="login-card">
        <h2>
          Welcome to <br />
          Todotecnofertas
        </h2>
        <form name="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <p>Forgot your password?</p>
          </div>
          <div className="login-container">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </section>
  );
}
