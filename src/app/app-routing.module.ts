import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "shop",
    component: MainComponent,
  },
  {
    path: "details/:id",
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
