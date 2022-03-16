import { Component, ComponentRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  // GET DEPARTMENT DATA
  getDepartmentData() {
    this.service
      .getDepartment()
      .subscribe((data) => (this.deparmentList = data));
  }

  // GET EMPLOYEE DATA
  getEmployeeDataList() {
    this.service.getEmployeeData().subscribe(
      (employeeData) => {
        // debugger
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

  // Create Form overlay
  displayOverlay() {
    console.log("okk");

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

  // Create Confirmation Popup overlay
  displayConfirmation(id: number) {
    console.log("okk");

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const component = new ComponentPortal(DeleteComponent);
    this.confirmationRef = this.overlayRef.attach(component);

    this.confirmationRef.instance.id = id;
    this.confirmationRef.instance.delete.subscribe((name) => {
      if(name === "delete")
      this.deleteEmployee(id);
      this.overlayRef.detach();
    });
  }

  // EDIT CLICK EVENT
  editEmployee(id: number) {
    // debugger
    // this.router.navigateByUrl(`/crud-task/employee-form/${id}`);
    this.displayOverlay();
    this.componentRef.instance.id = id;
  }

  // Open moadl to delete data
  showDeletePopup(id: number) {
    this.displayConfirmation(id);
  }
  
  //  DELETE EMPLOYEE DATA
  deleteEmployee(id: number) {
    this.service.deleteEmployeeData(id).subscribe((data) => {
      this.employeeList.splice(id - 1, 1);
      console.log('data deleted', data);
      this.getEmployeeDataList();
    });
  }

  drop(event: CdkDragDrop<Employee[]>) {
    moveItemInArray(this.employeeList, event.previousIndex, event.currentIndex);
  }

}
