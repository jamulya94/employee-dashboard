import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, SigninComponentComponent,EmployeeDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
