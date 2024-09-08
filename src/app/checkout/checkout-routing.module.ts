import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PayComponent } from "./pay/pay.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: PayComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
