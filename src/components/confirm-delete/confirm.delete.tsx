import { useNavigate, useParams } from 'react-router-dom';
import './confirm.delete.scss';
import { SyntheticEvent, useState } from 'react';
import { useOffers } from '../../hooks/use.offers';

export function ConfirmDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteOffer } = useOffers();
  const [isDelete, setIsDelete] = useState(false);

  const handleClickToDelete = (event: SyntheticEvent) => {
    event.preventDefault();

    deleteOffer(id!);
    setIsDelete(true);

    setTimeout(() => {
      setIsDelete(false);
      navigate('/');
    }, 2000);
  };

  return (
    <section className="confirm-delete">
      <div className="delete-card">
        <h2>Delete offer</h2>
        <p>Are you sure you want to remove the offer?</p>
        {isDelete ? (
          <div className="alert-confirm-delete">
            <p>Offer successfully deleted </p>
          </div>
        ) : (
          <button className="btn btn-delete" onClick={handleClickToDelete}>
            Delete
          </button>
        )}
      </div>
    </section>
  );
}
