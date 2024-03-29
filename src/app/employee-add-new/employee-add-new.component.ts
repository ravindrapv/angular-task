// employee-add-new.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-add-new',
  templateUrl: './employee-add-new.component.html',
  styleUrls: ['./employee-add-new.component.scss']
})
export class EmployeeAddNewComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar, // Inject MatSnackBar
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      name: [''],
      position: [''],
      salary: [''],
      experience: [''],
    });
  }

  ngOnInit(): void {}

  saveChanges() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = JSON.parse(JSON.stringify(this.employeeForm.value));

      this.employeeService.addEmployee(newEmployee).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/employees']);
          this.snackBar.open('Employee added successfully', 'Close', {
            duration: 3000, 
            panelClass: 'success-snackbar'
          });
        },
        (error) => {
          console.error(error);
          if (error.error && error.error.errors) {
            console.log('Validation errors:', error.error.errors);
          }
        }
      );
    } else {
      console.error('Form validation failed');
    }
  }
}