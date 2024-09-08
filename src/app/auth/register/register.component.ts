import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from "ngx-intl-tel-input";
import { MessageService } from "primeng/api";
import { RegisterForm, RegisterModel } from "../auth.models";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup<RegisterForm>;
  isSpaceless = false;
  isLower = false;
  isUpper = false;
  isNumber = false;
  separateDialCode = false;

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.Turkey];
  confirmPassword: string;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();

    this.registerForm.get("password")?.valueChanges.subscribe((res) => {
      this.passwordChange(res!);
    });
  }

  createRegisterForm() {
    this.registerForm = this.fb.group<RegisterForm>({
      mail: new FormControl<string | null>(null, {
        validators: [Validators.required, Validators.email],
      }),

      name: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
      surname: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
      phone: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
      id: new FormControl<number | null>(0, {
        validators: [Validators.required],
      }),
      userName: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
      address: new FormControl<string | null>(null, {
        validators: [Validators.required],
      }),
      ecommerceCompanyId: new FormControl<number | null>(1, {
        validators: [Validators.required],
      }),
      companyId: new FormControl<number | null>(1, {
        validators: [Validators.required],
      }),
      userTypeId: new FormControl<number | null>(0, {
        validators: [Validators.required],
      }),
      password: new FormControl<string | null>(null, {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ],
      }),
    });
  }

  submit() {
    if (this.registerForm.valid) {
      if (
        !this.isLower ||
        !this.isNumber ||
        !this.isUpper ||
        !this.isSpaceless
      ) {
        this.messageService.add({
          severity: "error",
          summary: `Şifre Gereken Yazım Kurallarını Sağlamıyor`,
          detail: ":(",
        });
      } else {
        if (this.confirmPassword != this.registerForm.get("password")?.value!) {
          this.messageService.add({
            severity: "error",
            summary: `Şifreler Uyuşmuyor`,
            detail: ":(",
          });
        } else {
          this.registerForm
            .get("phone")
            ?.setValue(
              (this.registerForm.get("phone")!.value as any).internationalNumber
            );

          this.authService
            .register(this.registerForm.value as RegisterModel)
            .subscribe({
              next: (res) => {
                this.messageService.add({
                  severity: "success",
                  summary: `Kayıt Başarıyla Tamamlandı`,
                  detail: ":(",
                });
              },
              error: (err) => {},
            });
        }
      }
    } else {
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          const errors = control.errors;
          if (errors!["required"]) {
            this.messageService.add({
              severity: "error",
              summary: `${key} is required`,
              detail: ":(",
            });
          }
          if (errors!["email"]) {
            this.messageService.add({
              severity: "error",
              summary: `${key} must be a valid email address`,
              detail: ":(",
            });
          }
          if (errors!["minlength"]) {
            this.messageService.add({
              severity: "error",
              summary: `${key} must be at least ${
                errors!["minlength"].requiredLength
              } characters long`,
              detail: ":(",
            });
          }
          if (errors!["maxlength"]) {
            this.messageService.add({
              severity: "error",
              summary: `${key} cannot be more than ${
                errors!["maxlength"].requiredLength
              } characters long`,
              detail: ":(",
            });
          }
          // Diğer özel validator hatalarını da ekleyebilirsiniz
        }
      });
    }
  }

  passwordChange(pass: string) {
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let whitespace = /^\S+$/;

    this.isSpaceless = whitespace.test(pass);
    this.isLower = lowerCase.test(pass);
    this.isUpper = upperCase.test(pass);
    this.isNumber = number.test(pass);

    console.log(pass);

    // this.isConfirm = !!(this.form.password == this.passwordConfirm);
  }
}
