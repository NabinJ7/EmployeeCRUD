"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var EmployeeService_1 = require("../service/EmployeeService");
require("rxjs/Rx");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(service) {
        this.service = service;
        this.isLoadingData = false;
        this.employees = new Array();
        this.message = 'Employee List';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.loadEmployee();
    };
    EmployeeComponent.prototype.loadEmployee = function () {
        var _this = this;
        this
            .service
            .getAllEmployees()
            .subscribe(function (resp) {
            _this.employees = resp.json();
        });
    };
    EmployeeComponent.prototype.loadTemplate = function (emp) {
        return this.readOnlyTemplate;
    };
    EmployeeComponent.prototype.deleteEmployee = function (_employee) {
        var _this = this;
        if (confirm("Are you sure you want to delete employee '" + _employee.FirstName + "'?")) {
            this.service.deleteEmployee(_employee.EmpId).subscribe(function (data) {
                // refresh the list
                alert('Employee Deleted Successfully!');
                _this.loadEmployee();
                return true;
            }, function (error) {
                _this.isLoadingData = false;
                console.error("Error deleting Employee!");
                alert(error);
            }, function () {
                _this.isLoadingData = false;
            });
        }
    };
    __decorate([
        core_1.ViewChild('readOnlyTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], EmployeeComponent.prototype, "readOnlyTemplate", void 0);
    __decorate([
        core_1.ViewChild('editTemplate'),
        __metadata("design:type", core_1.TemplateRef)
    ], EmployeeComponent.prototype, "editTemplate", void 0);
    EmployeeComponent = __decorate([
        core_2.Component({
            selector: 'employee-app',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map