import { Injectable } from '@angular/core';

interface UserData {
  cookie: string;
  token: string;
  profile: {
    averageGrade: number;
    birthday: Date;
    code?: string;
    course: string;
    cpf: string;
    email: string;
    name: string;
    period: string;
    picture: string;
    profile: any;
    progress: number;
    unit: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {
  }

  getFirstName() {
    try {
      const user = this.getUser().name.split(' ')[0];
      return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
    } catch (error) {
      return '';
    }
  };

  getPhoto() {
    try {
      return this.getUser().picture;
    } catch (error) {
      return '';
    }
  };

  isLoggedIn() {
    const user = localStorage.getItem('session');
    return user !== null;
  };

  logOff() {
    localStorage.removeItem('session');
  };

  getUser() {
    const user = localStorage.getItem('session');
    try {
      return (JSON.parse(user) as UserData).profile;
    } catch (error) {
      throw error;
    }
  };

  getAuth() {
    const user = localStorage.getItem('session');
    try {
      return JSON.parse(user).token;
    } catch (error) {
      throw error;
    }
  };

}
