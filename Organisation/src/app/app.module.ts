import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRouter } from './app.router';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './service/EmployeeService';
import { DepartmentService } from './service/departmentService';


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule, HttpModule, AppRouter],
    declarations: [AppComponent, EmployeeComponent, HeaderComponent, AddEmployeeComponent],
    providers: [EmployeeService, DepartmentService, { provide: LocationStrategy, useClass: HashLocationStrategy }],

    bootstrap: [AppComponent]
})
export class AppModule { }
