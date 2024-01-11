import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${employeeId}`);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(this.apiUrl, employee);
  }

  updateEmployee(employeeId: string, updatedEmployee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employeeId}`, updatedEmployee);
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${employeeId}`);
  }
}