import { TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../model/employee';
import { Department } from '../model/department';
import { EmployeeService } from '../service/EmployeeService';
import { DepartmentService } from '../service/departmentService';
import { AppRouter } from '../app.router';
import { Observable } from 'rxjs/Observable';

class ImageSnippet {
    constructor(public src: string, public file: File) { }
}

@Component({
    selector: 'add-employee-app',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
    public employees: Employee[];
    public employee = new Employee();
    public isAdd: Boolean = false;
    public isEdit: Boolean = false;
    private imageSrc: string = '';

    addEmployeeFG: FormGroup;
    selectedDept: number;
    departments: Array<Department>;
    deptHeader: string;
    empHeader: string;
    mainHeader: string;
    addSuccess: boolean;
    editSuccess: boolean;

    selected(event: any) {
        this.selectedDept = +(event.target.value);
    }

    constructor(private http: Http,
        private employeeService: EmployeeService,
        private deptService: DepartmentService,
        private router: Router,
        private fb: FormBuilder)
    {
        this.deptHeader = 'Department';
        this.empHeader = 'Employee Information';
        this.mainHeader = 'Add New Employee';
        this.departments = new Array<Department>();
    }

    ngOnInit() {
        this.loadDepartment();
    }

    private loadDepartment() {
        this
            .deptService
            .getDepartments()
            .subscribe((resp: Response) => {
                this.departments = resp.json();
                this.selectedDept = this.departments[0].DeptId;
            });
    }

    addEmployee(employee: Employee) {

        this.isAdd = true;
        this.isEdit = false;
        employee.DeptId = this.selectedDept;
        employee.EmpImage = this.imageSrc;
        this.employeeService.addEmployee(employee).subscribe(
            data => {
                alert('Employee Added Successfully!');
                this.addSuccess = true;

                this.employee = new Employee();
                this.router.navigate(['/employee']);;
            },
            error => {
                console.error("Error saving Product!");
                this.addSuccess = false;
                alert(error);
            }
        );
    }

    processFile(event: any) {
        var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('Invalid File Format, Please upload .png, .jpg, .jpeg');
            return;
        }
        this.imageSrc = file.name;
    }
}