import { FormControl } from "@angular/forms";

export class LoginModel {
  mail: string;
  password: string;
}

export class AuthResponseModel {
  accessToken: string;
  refreshToken: string;
  accessTokenExpirationTime: Date;
}

export class RegisterModel {
  name: string;
  userName: string;
  id: number = 0;
  surname: string;
  address: string;
  phone: string;
  mail: string;
  userTypeId: number = 1;
  companyId: number = 0;
  ecommerceCompanyId: number = 1;
  password: string;
}

export class RegisterForm {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  userName: FormControl<string | null>;
  surname: FormControl<string | null>;
  address: FormControl<string | null>;
  phone: FormControl<string | null>;
  mail: FormControl<string | null>;
  userTypeId: FormControl<number | null>;
  ecommerceCompanyId: FormControl<number | null>;
  companyId: FormControl<number | null>;
  password: FormControl<string | null>;
}
