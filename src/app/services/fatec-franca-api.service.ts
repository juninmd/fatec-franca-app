import { Injectable } from '@angular/core';
import RequestUtil from '../../utils/request.util';

@Injectable({
  providedIn: 'root'
})
export class FatecFrancaApiService extends RequestUtil {

  async login(params: any) {
    return this.request({ params, url: 'login', validate: false });
  }

  async getName() {
    return this.request({ url: 'name' });
  }

  async getProfile() {
    return this.request({ url: 'profile' });
  }

  async getAcademicCalendar() {
    return this.request({ url: 'academic-calendar' });
  }

  async getSchoolGrade() {
    return this.request({ url: 'school-grade' });
  }

  async getHistory() {
    return this.request({ url: 'history' });
  }

  async getSchedules() {
    return this.request({ url: 'schedules' });
  }

  async getRegisteredEmails() {
    return this.request({ url: 'emails' });
  }

  async getPartialGrades() {
    return this.request({ url: 'partialgrades' });
  }

  async getDisciplines() {
    return this.request({ url: 'disciplines' });
  }
}
