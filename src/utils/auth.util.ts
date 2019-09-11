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

export const isLoggedIn = () => {
  const user = localStorage.getItem('session');
  return user !== null;
};

export const logOff = () => {
  localStorage.removeItem('session');
};

export const getUser = () => {
  const user = localStorage.getItem('session');
  try {
    return (JSON.parse(user) as UserData).profile;
  } catch (error) {
    throw error;
  }
};


export const getAuth = (): string => {
  const user = localStorage.getItem('session');
  try {
    return JSON.parse(user).token;
  } catch (error) {
    throw error;
  }
};

export const getFirstName = (): string => {
  try {
    const user = getUser().name.split(' ')[0];
    return user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
  } catch (error) {
    return '';
  }
};

export const getPhoto = (): string => {
  try {
    return getUser().picture;
  } catch (error) {
    return '';
  }
};
