import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppModule } from '../app.module';
import { NewModuleComponent } from './new-module/new-module.component';

@NgModule({
  declarations: [NewModuleComponent],
  imports: [CommonModule, AppModule],
})
export class MyNewModule {}
