import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/EmployeeService';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'employee-app',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    //1. Template Ref types 
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
    //2. Other Variables
    message: string;
    employee: Employee;
    selemp: Employee;
    employees: Array<Employee>;
    isNewRecord: boolean;
    statusMessage: string;
    public isLoadingData: Boolean = false;

    constructor(private service: EmployeeService) {
        this.employees = new Array<Employee>();
        this.message = 'Employee List';
    }

    ngOnInit() {
        this.loadEmployee();
    }

    private loadEmployee() {
        this
            .service
            .getAllEmployees()
            .subscribe((resp: Response) => {
                this.employees = resp.json();
            });
    }

    loadTemplate(emp: Employee) {
        return this.readOnlyTemplate;
    }

    deleteEmployee(_employee: Employee) {
        if (confirm("Are you sure you want to delete employee '" + _employee.FirstName + "'?")) {
            this.service.deleteEmployee(_employee.EmpId).subscribe(
                data => {
                    // refresh the list
                    alert('Employee Deleted Successfully!');
                    this.loadEmployee();
                    return true;
                },
                error => {
                    this.isLoadingData = false;
                    console.error("Error deleting Employee!");
                    alert(error);
                },
                () => {
                    this.isLoadingData = false;
                }
            );
        }
    }
}
