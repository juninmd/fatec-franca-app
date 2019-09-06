import { Injectable } from '@angular/core';
import Axios from '../../utils/request.util';

@Injectable({
  providedIn: 'root'
})
export class FatecFrancaApiService {
  constructor(private axios: Axios) {
  }

  async login(params: any) {
    return this.axios.request({ params, url: 'login' });
  }

  async getName() {
    return this.axios.request({ url: 'name' });
  }

  async getProfile() {
    return this.axios.request({ url: 'profile' });
  }

  async getAcademicCalendar() {
    return this.axios.request({ url: 'academic-calendar' });
  }

  async getSchoolGrade() {
    return this.axios.request({ url: 'school-grade' });
  }

  async getHistory() {
    return this.axios.request({ url: 'history' });
  }

  async getSchedules() {
    return this.axios.request({ url: 'schedules' });
  }

  async getRegisteredEmails() {
    return this.axios.request({ url: 'emails' });
  }

  async getPartialGrades() {
    return this.axios.request({ url: 'partialgrades' });
  }

  async getDisciplines() {
    return this.axios.request({ url: 'disciplines' });
  }
}
