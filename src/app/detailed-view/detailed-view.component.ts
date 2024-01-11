import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar, 
    private employeeService: EmployeeService
  ) {}

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
    });
  }
editEmployee() {
  this.employeeService.getEmployeeById(this.employee._id).subscribe(
    (data) => {
      this.employee = data.employee;
      console.log('Employee loaded successfully');
      this.showSnackBar('Employee loaded successfully');
      this.router.navigate(['/employeeEdit', this.employee._id]);
    },
    (error) => {
      console.error('Error loading employee:', error);
      this.showSnackBar('Error loading employee');
    }
  );
}

deleteEmployee() {
  this.employeeService.deleteEmployee(this.employee._id).subscribe(
    () => {
      console.log('Employee deleted successfully');
      this.showSnackBar('Employee deleted successfully');
      this.router.navigate(['/employees']);
    },
    (error) => {
      console.error('Error deleting employee:', error);
      this.showSnackBar('Error deleting employee');
    }
  );
}

showSnackBar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 3000, 
    verticalPosition: 'top', 
  });
}
  }