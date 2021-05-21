import { HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'selenium-webdriver';
import {Employee} from './employee'
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees:Employee[];
  public editEmployee:Employee;
  public deleteEmployee;
  constructor(private employeeService:EmployeeService){}
  ngOnInit(){
    this.getEmployees()
  }
  public getEmployees(){
    this.employeeService.getEmployee().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public addEmployee(addForm:NgForm){
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response:Employee)=>{
        console.log(response)
        this.getEmployees();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  public updateEmployee(employee:Employee){
    console.log(employee)
    this.employeeService.updateEmployee(employee).subscribe(
      (response:Employee)=>{
        console.log(response)
        this.getEmployees()
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

  public onDeleteEmployee(employeeId:string){
    this.employeeService.deleteEmployee(employeeId).subscribe((response:void)=>{
      console.log(response)
      this.getEmployees();
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
    )
  }

  public searchEmployees(key:string){
    console.log(key)
    const results:Employee[]=[]
    for (const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase())!==-1
      || employee.email.toLowerCase().indexOf(key.toLowerCase())!==-1
      || employee.phone.indexOf(key)!==-1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase())!==-1){
        results.push(employee)
      }
    }
    this.employees=results;
    if(results.length === 0 || !key){
      this.getEmployees()
    }
  } 

  public onOpenModal(employee:Employee,mode:string){
    const container=document.getElementById('main-container')
    const button=document.createElement('button');
    button.type='button';
    button.style.display="none";
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode==='edit'){
      this.editEmployee=employee
      
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode==='delete'){
      this.deleteEmployee=employee
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }
}
