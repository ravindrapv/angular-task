// employee-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;
  employee!: Employee;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      name: [''],
      position: [''],
      salary: [''],
      experience: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const employeeId = params['id'];
      if (employeeId) {
        this.loadEmployeeDetails(employeeId);
      }
    });
  }

  loadEmployeeDetails(employeeId: string) {
    this.employeeService.getEmployeeById(employeeId).subscribe((data) => {
      this.employee = data.employee;
      this.employeeForm.patchValue(this.employee);
    });
  }

  saveChanges() {
    if (this.employeeForm.valid) {
      const updatedEmployee: Employee = JSON.parse(JSON.stringify(this.employeeForm.value));

      this.employeeService.updateEmployee(this.employee._id, updatedEmployee).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error(error);
          if (error.error && error.error.errors) {
            console.log('Validation errors:', error.error.errors);
          }
        }
      );
    } else {
      // Handle form validation errors
      console.error('Form validation failed');
    }
  }
}