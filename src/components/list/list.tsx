import { OfferCard } from '../offer/offer';
import { useOffers } from '../../hooks/use.offers';

import './list.scss';

export function List() {
  const { offers } = useOffers();

  return (
    <section className="list-offers" role="main">
      {offers.map((item) => (
        <OfferCard key={item.id} offerItem={item} />
      ))}
    </section>
  );
}
