import { Link, useNavigate } from 'react-router-dom';
import { useUsers } from '../../hooks/use.users';
import { SyntheticEvent, useState } from 'react';
import { User } from '../../model/user';
import './form.register.scss';

export function FormRegister() {
  const [isRegister, setIsRegister] = useState(false);
  const { register } = useUsers();

  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const data = {
      userName: (formElement.elements.namedItem('username') as HTMLInputElement)
        .value,
      email: (formElement.elements.namedItem('email') as HTMLInputElement)
        .value,
      password: (formElement.elements.namedItem('password') as HTMLInputElement)
        .value,
    } as Partial<User>;

    setIsRegister(true);
    register(data);

    setTimeout(() => {
      navigate('/sign-in');
    }, 2000);
  };

  return (
    <section className="section-register">
      <div className="register-card">
        <h2>Welcome to Todotecnofertas</h2>
        <form name="register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <p>Already have an account?</p>
            <Link to="/sign-in">Sign In</Link>
          </div>

          {isRegister ? (
            <div className="alert-confirm-register">
              <p>You have successfully registered! </p>
            </div>
          ) : (
            ''
          )}
          <div className="register-container">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </section>
  );
}
