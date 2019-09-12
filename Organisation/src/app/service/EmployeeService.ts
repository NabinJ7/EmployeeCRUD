import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    url = '/api/Employee/EmployeeList';
    constructor(private http: Http) { }

    public getAllEmployees() {
        return this.http.get(this.url);
    }

    addEmployee(employee:any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(employee);
        return this.http.post('/api/Employee/AddEmployee/', body, options).map((res: Response) => res.json());
    }

    updateEmployee(employee:any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(employee);
        return this.http.put('/api/Employee/UpdateEmployee/' + employee.Id, body, options).map((res: Response) => res.json());
    }

    deleteEmployee(employeeId: number) {
        return this.http.delete('/api/Employee/DeleteEmployee?Id=' + employeeId);
    }
}