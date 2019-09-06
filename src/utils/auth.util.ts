import { decode } from 'jsonwebtoken';

interface UserData {
  name: string;
  login: string;
}

export const isLoggedIn = () => {
  const user = localStorage.get('cookie');
  return user !== null;
};

export const logOff = () => {
  localStorage.remove('cookie');
};

export const getUser = (): UserData => {
  const user = localStorage.get('cookie');
  if (user === null) {
    logOff();
  }

  try {
    return decode(user) as UserData;
  } catch (error) {
    logOff();
    throw error;
  }
};


export const getAuth = (): UserData => {
  const user = localStorage.get('cookie');
  if (user === null) {
    logOff();
  }

  try {
    return user;
  } catch (error) {
    logOff();
    throw error;
  }
};

export const getFirstName = (): string => {
  const user = getUser().name.split(' ')[0];
  return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
};

export const setUser = (user: string) => {
  localStorage.set('cookie', user);
};
