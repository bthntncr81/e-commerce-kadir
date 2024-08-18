import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";

import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ButtonModule, InputTextModule],
})
export class AuthModule {}
