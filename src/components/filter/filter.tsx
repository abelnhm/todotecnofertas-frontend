import { SyntheticEvent } from 'react';
import { useOffers } from '../../hooks/use.offers';
import './filter.scss';
import { Loading } from '../loading/loading';

export function Filter() {
  const { loadByCategory, offers } = useOffers();
  const handleClickFilterByLastOffers = (
    event: SyntheticEvent,
    category: string
  ) => {
    event.preventDefault();

    if (offers.length === 0) {
      return <Loading />;
    }

    loadByCategory(category);
  };

  return (
    <section className="filter" role="search">
      <div className="container">
        <h2>Filter</h2>
        <ul>
          {/* <li>
            <a href="#" className="filter-on-fire">
              <i className="fa-solid fa-fire"></i> Offers On Fire!
            </a>
          </li> */}
          <li>
            <a
              href="#"
              onClick={(event) => handleClickFilterByLastOffers(event, 'all')}
            >
              <i className="fa-solid fa-fire"></i> All Latest Offers
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
