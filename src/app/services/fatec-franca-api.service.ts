import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FatecFrancaApiService {
  constructor() {
    const auth = localStorage.getItem('cookie');

    axios.defaults.headers = {
      authorization: auth
    };

    axios.defaults.baseURL = environment.fatecApi.baseUrl;
    axios.defaults.method = 'get';
  }

  async login(params: any) {
    return axios.get('login', { params });
  }

  async getName() {
    return axios.get('name');
  }

  async getProfile() {
    return axios.get('profile');
  }

  async getAcademicCalendar() {
    return axios.get('academic-calendar');
  }

  async getSchoolGrade() {
    return axios.get('school-grade');
  }

  async getHistory() {
    return axios.get('history');
  }

  async getSchedules() {
    return axios.get('schedules');
  }

  async getRegisteredEmails() {
    return axios.get('emails');
  }

  async getPartialGrades() {
    return axios.get('partialgrades');
  }

  async getDisciplines() {
    return axios.get('disciplines');
  }
}
