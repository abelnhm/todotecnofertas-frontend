import { Link, useNavigate } from 'react-router-dom';
import { useOffers } from '../../hooks/use.offers';
import { useUsers } from '../../hooks/use.users';
import './user.profile.scss';
import { SyntheticEvent } from 'react';

export function UserProfile() {
  const { logout, loggedUser } = useUsers();
  const { offers } = useOffers();
  const navigate = useNavigate();

  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    logout();
    navigate('/');
  };

  const offersByUser = offers.filter((item) => {
    return item.author.id === loggedUser?.id;
  });

  return (
    <section className="user-profile" role="contentinfo">
      <div className="info-user">
        <p className="header">My data</p>
        <div>
          <p>Name: {loggedUser?.userName}</p>
          <p>Email: {loggedUser?.email}</p>
        </div>
        <div className="container-logout">
          <button
            onClick={handleClick}
            onKeyDown={logout}
            className="button-logout"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="user-offers">
        <p className="header">My offers</p>
        <div>
          <ul>
            {offersByUser.map((item) => (
              <li key={item.id}>
                <div className="offer-name">
                  <img src={item.image.cloudinaryURL} title="image offer" />
                  {item.title}
                </div>
                <div className="container-buttons">
                  <Link className="show" to={`/offer/` + item.id}>
                    View
                  </Link>
                  <Link className="edit" to={`/offer/edit/` + item.id}>
                    Edit
                  </Link>
                  <Link className="delete" to={`/offer/delete/` + item.id}>
                    Delete
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
