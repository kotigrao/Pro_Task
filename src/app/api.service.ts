import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7046'; // Replace with your API endpoint

  constructor() {}

  // Common GET request
  get(endpoint: string) {
    return axios.get(`${this.apiUrl}/${endpoint}`);
  }

  // Common POST request
  post(endpoint: string, data: any) {
    return axios.post(`${this.apiUrl}/${endpoint}`, data);
  }
  //update request
  put(endpoint: string, data: any) {
    return axios.put(`${this.apiUrl}/${endpoint}`, data);
  }
  //delete request
  delete(endpoint: string, data: any) {
    return axios.delete(`${this.apiUrl}/${endpoint}`, data);
  }
  // Add other common request methods as needed
}
