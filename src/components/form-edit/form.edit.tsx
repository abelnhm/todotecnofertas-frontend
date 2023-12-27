import { SyntheticEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Offer } from '../../model/offer';
import { useOffers } from '../../hooks/use.offers';
import './form.edit.scss';
import Editor from 'react-simple-wysiwyg';

export function FormEdit() {
  const { id } = useParams();
  const { offers, updateOffer } = useOffers();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const offerItem = offers.find((item: Offer) => item.id === id) as Offer;

  const [html, setHtml] = useState(offerItem.description);

  function onChange(event: SyntheticEvent) {
    setHtml((event.target as HTMLInputElement).value);

    const description = document.getElementById(
      'description'
    ) as HTMLInputElement;
    description.value = html;
  }

  const handleSubmitEdit = (event: SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    updateOffer(offerItem.id, formData);
    setIsEdit(true);

    setTimeout(() => {
      setIsEdit(false);
      navigate('/');
    }, 2000);
  };

  return (
    <section className="section-edit">
      <div className="edit-card">
        <h2>Edit offer</h2>
        <form name="edit-form" id="edit-form" onSubmit={handleSubmitEdit}>
          <div className="image-edit">
            <img
              src={offerItem.image.cloudinaryURL}
              alt="offer image"
              width={100}
            />
          </div>
          {/* <div>
            <label htmlFor="image-file">Image</label>
            <input type="file" id="image-file" name="image" />
          </div> */}
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={offerItem.title}
            />
          </div>
          {/* <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              defaultValue={offerItem.description}
            />
          </div> */}
          <div>
            <label htmlFor="description">Description</label>
            <input type="hidden" id="description" name="description" required />
            {/* <textarea name="description" id="description" required /> */}
            <Editor
              containerProps={{ style: { resize: 'vertical' } }}
              value={html}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="regular-price">Regular price</label>
            <input
              type="number"
              id="regular-price"
              name="regularPrice"
              defaultValue={offerItem.regularPrice}
            />
          </div>
          <div>
            <label htmlFor="offer-price">Offer price</label>
            <input
              type="number"
              id="offer-price"
              name="offerPrice"
              defaultValue={offerItem.offerPrice}
            />
          </div>
          <div>
            <label htmlFor="coupon">Coupon</label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              defaultValue={offerItem.coupon}
            />
          </div>
          <div>
            <label htmlFor="url">Url offer</label>
            <input
              type="text"
              id="url"
              name="offerURL"
              defaultValue={offerItem.offerURL}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              defaultValue={offerItem.category}
            >
              <option value="mobiles">Mobiles</option>
              <option value="tablets">Tablets</option>
              <option value="computers">Computers</option>
              <option value="games">Games</option>
              <option value="digital">Digital content</option>
              <option value="others">Others</option>
            </select>
          </div>

          {isEdit ? (
            <div className="alert-confirm-edit">
              <p>The offer has been edited correctly</p>
            </div>
          ) : (
            <div className="button-edit-container">
              <input type="submit" value="Edit offer" />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
