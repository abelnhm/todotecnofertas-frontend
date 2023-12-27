import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { FormEdit } from './form.edit';
import userEvent from '@testing-library/user-event';
import { Offer } from '../../model/offer';

jest.mock('../../hooks/use.offers', () => ({
  useOffers: jest.fn().mockReturnValue({
    offers: [
      { id: '1', title: 'test', description: 'testing' },
    ] as unknown as Offer[],
    updateOffer: jest.fn(),
  }),
}));

const setup = async () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={appStore}>
        <FormEdit></FormEdit>
      </Provider>
    </BrowserRouter>
  );

  const form = screen.getByRole('form');
  const input = screen.getAllByRole('textbox');
  const fileInputs = container.querySelectorAll('input[type="file"]');
  const fileName = 'test-file.png';
  const file = new File([''], fileName, { type: 'image.png' });

  await userEvent.type(input[0], 'test');
  await userEvent.type(input[1], 'testing');

  for (const fileInput of fileInputs) {
    await userEvent.upload(fileInput as HTMLElement, file);
    fireEvent.change(fileInput as HTMLElement, { target: { files: [file] } });
  }

  return { form, container, fileInputs };
};

describe('Component must...', () => {
  test.skip('Submits form with correct values', async () => {
    const { form } = await setup();
    await fireEvent.submit(form);
  });
});
