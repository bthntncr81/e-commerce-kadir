import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// PrimeNG Components
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { PayComponent } from "./pay/pay.component";

@NgModule({
  declarations: [PayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, // If needed for other purposes
    CardModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    CheckoutRoutingModule,
  ],
})
export class CheckoutModule {}
