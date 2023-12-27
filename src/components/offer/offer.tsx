import { Link } from 'react-router-dom';
import { Offer } from '../../model/offer';
import './offer.scss';

type Props = {
  offerItem: Offer;
};

export function OfferCard({ offerItem }: Props) {
  const date = new Date(offerItem.createdAt);
  const formattedDateOfCreated = date.toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const differencePrice = offerItem.offerPrice - offerItem.regularPrice;
  const percentageDiscount = (
    (differencePrice / offerItem.regularPrice) *
    100
  ).toFixed(0);

  const urlOffer = new URL(offerItem.offerURL);
  const hostNameOffer = urlOffer.host;
  const cleanHostNameOffer = hostNameOffer.replace('www.', '');

  let description = offerItem.description;
  if (description.length > 150) {
    description = description.substring(0, 150) + '...';
  }

  const updatedSkin = {
    ...offerItem,
    image: {
      ...offerItem.image,
      cloudinaryURL: offerItem.image.cloudinaryURL!.replace('http', 'https'),
    },
  };

  return (
    <section className="card-offer" role="contentinfo">
      <div className="content-image">
        <img src={updatedSkin.image.cloudinaryURL} alt="offer image" />
      </div>
      <div className="content-info">
        <div className="content-info-header">
          <div className="buttons-vote">
            <button className="btn-vote-down" title="vote-down">
              <i className="fa-regular fa-thumbs-down"></i>
            </button>
            <span className="status">+1000</span>
            <button className="btn-vote-up" title="vote-up">
              <i className="fa-regular fa-thumbs-up"></i>
            </button>
          </div>
          <div className="created-at">
            <p>
              <i className="fa-regular fa-calendar-days"></i>{' '}
              {formattedDateOfCreated}
            </p>
          </div>
        </div>
        <div className="title">{offerItem.title}</div>
        <div className="subtitle">
          <span className="offer-price">{offerItem.offerPrice}€</span>{' '}
          <span className="regular-price">{offerItem.regularPrice}€</span>
          <span className="discount">({percentageDiscount}%)</span>
          <span className="brand-store">{cleanHostNameOffer}</span>
        </div>
        {/* <div className="description">{description}</div> */}
        <div className="author">
          <i className="fa-solid fa-user-tag"></i>
          <p>{offerItem.author.userName}</p>
        </div>
        <div className="offer-link">
          <Link className="button-share" to={`offer/` + offerItem.id}>
            Go to Offer <i className="fa-solid fa-up-right-from-square"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
