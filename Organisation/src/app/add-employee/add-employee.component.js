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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var employee_1 = require("../model/employee");
var EmployeeService_1 = require("../service/EmployeeService");
var departmentService_1 = require("../service/departmentService");
var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(http, employeeService, deptService, router, fb) {
        this.http = http;
        this.employeeService = employeeService;
        this.deptService = deptService;
        this.router = router;
        this.fb = fb;
        this.employee = new employee_1.Employee();
        this.isAdd = false;
        this.isEdit = false;
        this.imageSrc = '';
        this.deptHeader = 'Department';
        this.empHeader = 'Employee Information';
        this.mainHeader = 'Add New Employee';
        this.departments = new Array();
    }
    AddEmployeeComponent.prototype.selected = function (event) {
        this.selectedDept = +(event.target.value);
    };
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.loadDepartment();
    };
    AddEmployeeComponent.prototype.loadDepartment = function () {
        var _this = this;
        this
            .deptService
            .getDepartments()
            .subscribe(function (resp) {
            _this.departments = resp.json();
            _this.selectedDept = _this.departments[0].DeptId;
        });
    };
    AddEmployeeComponent.prototype.addEmployee = function (employee) {
        var _this = this;
        this.isAdd = true;
        this.isEdit = false;
        employee.DeptId = this.selectedDept;
        employee.EmpImage = this.imageSrc;
        this.employeeService.addEmployee(employee).subscribe(function (data) {
            alert('Employee Added Successfully!');
            _this.addSuccess = true;
            _this.employee = new employee_1.Employee();
            _this.router.navigate(['/employee']);
            ;
        }, function (error) {
            console.error("Error saving Product!");
            _this.addSuccess = false;
            alert(error);
        });
    };
    AddEmployeeComponent.prototype.processFile = function (event) {
        var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('Invalid File Format, Please upload .png, .jpg, .jpeg');
            return;
        }
        this.imageSrc = file.name;
    };
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'add-employee-app',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http,
            EmployeeService_1.EmployeeService,
            departmentService_1.DepartmentService,
            router_1.Router,
            forms_1.FormBuilder])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map