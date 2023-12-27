import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { RootState, appStore } from '../store/store';
import { useOffers } from './use.offers';
import { Offer } from '../model/offer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
  useSelector: jest
    .fn()
    .mockReturnValue((state: RootState) => state.offersState)
    .mockReturnValue({
      selectedValue: '',
    }),
}));

describe('Given useOffers Hook', () => {
  const mockOfferId = '1' as unknown as Offer['id'];
  const mockFormData = {} as FormData;
  const mockCategory = 'mobiles';
  const TestComponent = () => {
    const {
      loadOffers,
      loadOffer,
      createOffer,
      updateOffer,
      deleteOffer,
      loadByCategory,
    } = useOffers();

    return (
      <>
        <button title="loadOffers" onClick={() => loadOffers()}></button>
        <button title="loadOffer" onClick={() => loadOffer()}></button>
        <button
          title="createOffer"
          onClick={() => createOffer(mockFormData)}
        ></button>
        <button
          title="updateOffer"
          onClick={() => updateOffer(mockOfferId, mockFormData)}
        ></button>
        <button
          title="deleteOffer"
          onClick={() => deleteOffer(mockOfferId)}
        ></button>
        <button
          title="loadByCategory"
          onClick={() => loadByCategory(mockCategory)}
        ></button>
      </>
    );
  };

  let elements: HTMLElement[];
  beforeEach(() => {
    render(
      <Provider store={appStore}>
        <TestComponent></TestComponent>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });

  test('Then dispatch should have been called when loading offers click', async () => {
    await userEvent.click(elements[0]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  test('Then dispatch should have been called when loading an offer item click', async () => {
    await userEvent.click(elements[1]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  test('Then dispatch should have been called when creating an offer item click', async () => {
    await userEvent.click(elements[2]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  test('Then dispatch should have been called when updating an offer item click', async () => {
    await userEvent.click(elements[3]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  test('Then dispatch should have been called when deleting an offer item click', async () => {
    await userEvent.click(elements[4]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  test('Then dispatch should have been called when loading offers by category click', async () => {
    await userEvent.click(elements[5]);
    expect(useDispatch()).toHaveBeenCalled();
  });

  describe('Given loadOffers', () => {
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: jest.fn().mockReturnValue(jest.fn()),
      useSelector: jest
        .fn()
        .mockReturnValue((state: RootState) => state.offersState)
        .mockReturnValue({
          selectedValue: 'test',
        }),
    }));
    const TestComponent = () => {
      const { loadOffers } = useOffers();
      return <button title="loadOffers" onClick={() => loadOffers()}></button>;
    };
    let elements: HTMLElement[];
    beforeEach(() => {
      render(<TestComponent></TestComponent>);
      elements = screen.getAllByRole('button');
    });
    test('Then dispatch should have been called when loading offers click', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
