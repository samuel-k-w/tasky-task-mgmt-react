export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface AuthStore {
  user: User | null;
  token: string | null;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}
