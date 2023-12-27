import { serverUrl } from '../config';
import { LoginUser, User } from '../model/user';
import { LoginResponse } from '../types/login.response';

export class UsersRepo {
  apiUrl = serverUrl + '/user';

  async createUser(newUser: Partial<User>): Promise<User> {
    const url = this.apiUrl + '/register';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async login(loginUser: LoginUser): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async loginWithToken(token: string): Promise<LoginResponse> {
    const url = this.apiUrl + '/login';
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
