import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/get`)
  }
  public addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/add`,{name:employee.name,email:employee.email,phone:employee.phone,jobTitle:employee.jobTitle,imageURL:employee.imageURL,employeeId:employee.employeeId})
  }
  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/update/${employee._id}`,{name:employee.name,email:employee.email,phone:employee.phone,jobTitle:employee.jobTitle,imageURL:employee.imageURL,employeeId:employee.employeeId})
  }
  public deleteEmployee(employeeId:string):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${employeeId}`)
  }
}
