import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { ToastModule } from "primeng/toast";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasketSidebarComponent } from "./basket-sidebar/basket-sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { KadirProductService } from "./kadir-product.service";
import { KadirProductComponent } from "./kadir-product/kadir-product.component";
import { MainComponent } from "./main/main.component";
import { MyFirstComponent } from "./my-first/my-first.component";
import { ProductComponent } from "./product/product.component";
import { MessageService } from "primeng/api";
import {DialogModule} from 'primeng/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    KadirProductComponent,
    BasketSidebarComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    ToastModule,
    CarouselModule,
    BrowserModule,
    SidebarModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [KadirProductService,MessageService],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class AppModule {}
