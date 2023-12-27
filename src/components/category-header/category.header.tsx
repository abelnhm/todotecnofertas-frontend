import { SyntheticEvent } from 'react';
import './category.header.scss';
import { useOffers } from '../../hooks/use.offers';

export function CategoryHeader() {
  const { loadByCategory } = useOffers();

  const handleClickLeft = (event: SyntheticEvent) => {
    event.preventDefault();
    const scroll = document.querySelector('.category-list') as HTMLElement;
    scroll.scrollLeft -= 100;
  };
  const handleClickRight = (event: SyntheticEvent) => {
    event.preventDefault();
    const scroll = document.querySelector('.category-list') as HTMLElement;
    scroll.scrollLeft += 100;
  };

  const handleClickFilterByCategory = (
    event: SyntheticEvent,
    category: string
  ) => {
    event.preventDefault();

    loadByCategory(category);
  };

  return (
    <section className="sub-header" role="tabpanel">
      <button
        className="control-scroll-category"
        role="button"
        onClick={handleClickLeft}
        title="Scroll to left"
        data-testid="scroll-left"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <ul className="category-list">
        {/* <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'all')}
          >
            <i className="fa-solid fa-rotate"></i> All
          </a>
        </li> */}
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'mobiles')}
          >
            <i className="fa-solid fa-mobile-screen"></i> Mobile
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'tablets')}
          >
            <i className="fa-solid fa-tablet-screen-button"></i> Tablets
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'computers')}
          >
            <i className="fa-solid fa-laptop"></i>Computers
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'games')}
          >
            <i className="fa-solid fa-gamepad"></i>Games
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'digital')}
          >
            <i className="fa-solid fa-globe"></i>Digitals
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClickFilterByCategory(event, 'others')}
          >
            <i className="fa-solid fa-globe"></i>Others
          </a>
        </li>
      </ul>
      <button
        className="control-scroll-category"
        onClick={handleClickRight}
        title="Scroll to right"
        data-testid="scroll-right"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </section>
  );
}
