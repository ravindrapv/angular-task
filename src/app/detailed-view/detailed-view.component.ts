import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const employeeId = params['id'];
      if (employeeId) {
        this.loadEmployeeDetails(employeeId);
      }
    });
  }

  loadEmployeeDetails(employeeId: string) {
    this.employeeService.getEmployeeById(employeeId).subscribe(data => {
      this.employee = data.employee;
    });
  }

  editEmployee() {
    this.router.navigate(['/employeeEdit', this.employee._id]);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee._id).subscribe(
      () => {
        console.log('Employee deleted successfully');
        this.router.navigate(['/employees']);
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
}