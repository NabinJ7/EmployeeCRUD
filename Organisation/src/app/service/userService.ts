import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user";
import { Observable } from 'rxjs/Observable';

let fakeUsers = [{ id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com' },
{ id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com' },
{ id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com' },
{ id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com' },
];

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers() {

        return Observable.of(fakeUsers).delay(5000);
    }

    getUserById(id: number) {
        return this.http.get<User>( '/' + id);
    }

    createUser(user: User) {
        return this.http.post("", user);
    }

    updateUser(user: User) {
        return this.http.put("", user);
    }

    deleteUser(id: number) {
        return this.http.delete("");
    }
}
