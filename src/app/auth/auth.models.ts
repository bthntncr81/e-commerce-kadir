export class LoginModel {
  mail: string;
  password: string;
}

export class AuthResponseModel {
  accessToken: string;
  refreshToken: string;
  accessTokenExpirationTime: Date;
}
