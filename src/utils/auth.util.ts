interface UserData {
  name: string;
  login: string;
}

export const isLoggedIn = () => {
  const user = localStorage.getItem('token');
  return user !== null;
};

export const logOff = () => {
  localStorage.remove('token');
};

export const getUser = (): UserData => {
  const user = localStorage.getItem('token');
  if (user === null) {
    logOff();
  }

  try {
    return user as unknown as UserData;
  } catch (error) {
    logOff();
    throw error;
  }
};


export const getAuth = (): string => {
  const user = localStorage.getItem('token');
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
  localStorage.set('token', user);
};
