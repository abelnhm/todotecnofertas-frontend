import { serverUrl } from '../config';
import { Offer } from '../model/offer';

export class OffersRepo {
  apiUrl: string;
  token: string;

  constructor(token: string) {
    this.token = token;
    this.apiUrl = serverUrl + '/offer';
  }

  async getOfferById(id: string): Promise<Offer> {
    const response = await fetch(this.apiUrl + '/' + id);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getOffers(): Promise<Offer[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async filterOffersByCategory(category: string): Promise<Offer[]> {
    const response = await fetch(`${this.apiUrl}/category/${category}`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createOffer(newOffer: FormData): Promise<Offer> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: newOffer,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteOffer(id: Offer['id']): Promise<void> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
  }

  async updateOffer(id: string, updateOffer: FormData): Promise<Offer> {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'PATCH',
      body: updateOffer,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
