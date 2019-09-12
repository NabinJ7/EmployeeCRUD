import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Department } from '../model/department';
import 'rxjs/add/operator/map';

@Injectable()
export class DepartmentService {
    url = '/api/Department/DepartmentList';
    constructor(private http: Http) { }

    public getDepartments() {
        return this.http.get(this.url);
    }
}