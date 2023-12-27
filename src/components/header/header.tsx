import { Link } from 'react-router-dom';
import './header.scss';
import { useUsers } from '../../hooks/use.users';

export function Header() {
  const { loggedUser } = useUsers();

  return (
    <header>
      <div className="header-logo">
        <img
          src="https://res.cloudinary.com/dm53t8asy/image/upload/v1703009349/todotecnofertas/icon_dwdugi.png"
          title="Icono Todotecnofertas"
        />
        <h1>
          Todo<span>tecnofertas</span>
          <small>(beta)</small>
        </h1>
      </div>
      <nav className="header-nav">
        {!loggedUser ? (
          <ul>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link className="button-share" to="/sign-in">
                + Share
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="info-user">
              <Link to="/my-profile">
                <i className="fa-regular fa-user"></i>
                {loggedUser!.userName}
              </Link>
            </li>
            <li>
              <Link className="button-share" to="/offer/share">
                + Share
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
