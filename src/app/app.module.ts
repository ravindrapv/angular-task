import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
// import { EmployeeAddComponent } from './employee-add-modal/employee-add-modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

import { EmployeeAddNewComponent } from './employee-add-new/employee-add-new.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeListComponent,
    DetailedViewComponent,
    SideBarComponent,
    EmployeeAddNewComponent,
    EmployeeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
