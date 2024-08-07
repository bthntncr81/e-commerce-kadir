import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { KadirProductService } from './kadir-product.service';
import { KadirProductComponent } from './kadir-product/kadir-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    KadirProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KadirProductService],
  bootstrap: [AppComponent],
  exports:[HeaderComponent,FooterComponent]
})
export class AppModule { }
