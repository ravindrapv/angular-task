import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { EmployeeAddNewComponent } from './employee-add-new/employee-add-new.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddNewComponent },
  { path: 'employee/:id', component: DetailedViewComponent },
  { path: 'employeeModal', component: EmployeeAddNewComponent },
  { path: 'employeeEdit/:id', component: EmployeeEditComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
