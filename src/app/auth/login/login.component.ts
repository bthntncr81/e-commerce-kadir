import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "primeng/api";
import { LoginModel } from "../auth.models";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  @ViewChild("loginForm") loginForm!: NgForm;

  loginModel: LoginModel = {
    mail: "",
    password: "",
  };

  isSpaceless = false;
  isLower = false;
  isUpper = false;
  isNumber = false;

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  submit(form: any) {
    if (form.valid) {
      this.authService.login(this.loginModel).subscribe({
        next: (res) => {
          localStorage.setItem("auth_token", res.data?.accessToken!);
          localStorage.setItem("refresh_token", res.data?.refreshToken!);
          this.messageService.add({
            severity: "success",
            summary: "Başarıyla Giriş Yapıldı",
            detail: "Muazzam",
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: "error",
            summary: err.error.message,
            detail: "Muazzam",
          });
        },
      }); // Form gönderme işlemi burada yapılır.
    } else {
      var error = "";
      if (form.controls.mail.errors) {
        if (form.controls.mail.errors.required) {
          error = "E- alanı gerekli.";
        } else if (form.controls.mail.errors.email) {
          error = "Geçerli bir e-posta adresi girin.";
        }
      } 
      this.messageService.add({
        severity: "error",
        summary: error,
        detail: "Muazzam",
      });
    }
  }

  passwordChange() {
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let whitespace = /^\S+$/;

    this.isSpaceless = whitespace.test(this.loginModel.password);
    this.isLower = lowerCase.test(this.loginModel.password);
    this.isUpper = upperCase.test(this.loginModel.password);
    this.isNumber = number.test(this.loginModel.password);

    console.log(this.loginModel.password);

    // this.isConfirm = !!(this.form.password == this.passwordConfirm);
  }
}
