import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { FormCreate } from './form.create';

describe('Given FormCreate component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FormCreate></FormCreate>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });

    test('Then it should have the correct form fields', () => {
      const imageInput = screen.getByLabelText('Image');
      const titleInput = screen.getByLabelText('Title');
      const descriptionInput = screen.getByLabelText('Description');
      const regularPriceInput = screen.getByLabelText('Regular price');
      const offerPriceInput = screen.getByLabelText('Offer price');
      const couponInput = screen.getByLabelText('Coupon');
      const urlInput = screen.getByLabelText('Url offer');
      const categorySelect = screen.getByLabelText('Category');
      const submitButton = screen.getByRole('button', { name: 'Share Offer' });

      expect(imageInput).toBeInTheDocument();
      expect(titleInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(regularPriceInput).toBeInTheDocument();
      expect(offerPriceInput).toBeInTheDocument();
      expect(couponInput).toBeInTheDocument();
      expect(urlInput).toBeInTheDocument();
      expect(categorySelect).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });

    test('Then it should submit the form when the submit button is clicked', () => {
      const form = screen.getByRole('form');
      const handleSubmit = jest.fn();
      form.addEventListener('submit', handleSubmit);

      fireEvent.submit(form);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    test('Then it should call createOffer function with form data when the form is submitted', () => {
      const createOffer = jest.fn();
      const formData = new FormData();
      const form = screen.getByRole('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        createOffer(formData);
      });

      fireEvent.submit(form);

      expect(createOffer).toHaveBeenCalledWith(formData);
    });

    test('Then it should navigate to "/my-profile" after form submission', () => {
      const navigate = jest.fn();
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => navigate,
      }));

      const form = screen.getByRole('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        navigate('/my-profile');
      });

      fireEvent.submit(form);

      expect(navigate).toHaveBeenCalledWith('/my-profile');
    });
  });
});
