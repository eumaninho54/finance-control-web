export interface IAuthService {
  username: string;
  auth: boolean;
  token: string;
}

export interface loginProps {
  username: string
  password: string
}