import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// ------------------------------------------------------------------------ /
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { Department } from 'src/app/shared/models/department.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  deparmentList: Department[];
  employeeList: Employee[];
  filterData: string = '';

  constructor(private service: EmployeeService, private router: Router, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getEmployeeDataList();
    this.getDepartmentData();
  }
  /**
  * @name getDepartmentData
  * @description This method get the department list.
  */
  public getDepartmentData() {
    this.service
      .getDepartment()
      .subscribe((data) => (this.deparmentList = data));
  }

  /**
  * @name getEmployeeDataList
  * @description This method get the employee list.
   */
  public getEmployeeDataList() {
    this.service.getEmployeeData().subscribe(
      (employeeData) => {
        this.employeeList = employeeData;
      },
      () => {
        alert('Something went wrong');
      }
    );
  }

  componentRef: ComponentRef<EmployeeFormComponent>;
  confirmationRef: ComponentRef<DeleteComponent>;
  overlayRef: OverlayRef;

  /**
   * @name displayOverlay
   * @description This method creates the overlay for form.
   */
  public displayOverlay() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().right(),
    });

    const component = new ComponentPortal(EmployeeFormComponent);
    this.componentRef = this.overlayRef.attach(component);

    this.componentRef.instance.onSubmitData.subscribe(() => {
      this.getEmployeeDataList();
    });

    this.componentRef.instance.close.subscribe(() => {
      this.overlayRef.detach();
    });
  }

  /**
   * @name displayConfirmation
   * @description This method creates the delete popup overlay.
   * @param id 
   */
  public displayConfirmation(id: number) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(DeleteComponent);
    this.confirmationRef = this.overlayRef.attach(component);

    this.confirmationRef.instance.id = id;
    this.confirmationRef.instance.delete.subscribe((name) => {
      if (name === "delete")
        this.deleteEmployee(id);
      this.overlayRef.detach();
    });
  }

  /**
   * @name editEmployee
   * @description This method patch the employee data in form and edit the value.
   * @param id 
   */
  public editEmployee(id: number) {
    this.displayOverlay();
    this.componentRef.instance.id = id;
  }

  /**
   * @name deleteEmployee
   * @description This method delete the employee.
   * @param id 
   */
  public deleteEmployee(id: number) {
    this.service.deleteEmployeeData(id).subscribe((data) => {
      this.employeeList.splice(id - 1, 1);
      this.getEmployeeDataList();
    });
  }

  /**
   * @name drop
   * @description This method is for drag and drop functionality.
   * @param event 
   */
  public drop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.employeeList, event.previousIndex, event.currentIndex);
  }

}
