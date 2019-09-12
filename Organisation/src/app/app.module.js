"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var app_router_1 = require("./app.router");
var employee_component_1 = require("./employee/employee.component");
var header_component_1 = require("./header/header.component");
var add_employee_component_1 = require("./add-employee/add-employee.component");
var EmployeeService_1 = require("./service/EmployeeService");
var departmentService_1 = require("./service/departmentService");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, platform_browser_1.BrowserModule, http_1.HttpModule, app_router_1.AppRouter],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, header_component_1.HeaderComponent, add_employee_component_1.AddEmployeeComponent],
            providers: [EmployeeService_1.EmployeeService, departmentService_1.DepartmentService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map