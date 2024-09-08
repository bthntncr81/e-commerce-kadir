import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponseModel, LoginModel, RegisterModel } from "./auth.models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(model: LoginModel): Observable<ServiceResultModel<AuthResponseModel>> {
    return this.httpClient.post<ServiceResultModel<AuthResponseModel>>(
      "http://localhost:5213/api/Authorization/Login",
      model
    );
  }

  register(
    model: RegisterModel
  ): Observable<ServiceResultModel<AuthResponseModel>> {
    return this.httpClient.post<ServiceResultModel<AuthResponseModel>>(
      "http://localhost:5213/api/Authorization/Register",
      model
    );
  }
}

export class ServiceResultModel<T> {
  data?: T;
  success?: boolean;
  message?: string;
  statusCode?: HTTPStatusCode;
  messages?: string[];
  totalCount?: number;
}

export enum HTTPStatusCode {
  SUCCESS = 200,
  BADREQUEST = 400,
  BADGATEWAY = 500,
}
