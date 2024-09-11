import { Injectable } from '@angular/core';
import axiosInstance from './axiosConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async fetchUserData(userId: string): Promise<any> {
    try {
      const response = await axiosInstance.get(`/users/find/${userId}`);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async fetchAllUsers(): Promise<any> {
    try {
      const response = await axiosInstance.get('/users/find');
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async loginUser(credentials: { username: any; email: any; password: string }): Promise<any> {
    try {
      const response = await axiosInstance.post('/users/login', credentials);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async signupUser(user: { username: string; email: string; password: string; dob: string; firstname: string; lastname: string }): Promise<any> {
    try {
      const response = await axiosInstance.post('/users/register', user);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  private handleError(error: any): void {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.log('Authentication error:', error.response.data);
    }
    throw new Error('Something went wrong!');
  }
}
