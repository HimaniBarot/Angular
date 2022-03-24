import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { FilterForm } from '../../model/filter.model';
import { FilterDataPresentationComponent } from '../mentor-list-presentation/filter-data-presentation/filter-data-presentation.component';

@Injectable()

export class MentorListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;
  
  private filterData: Subject<number> = new Subject();
  public filterData$: Observable<number> = new Observable();

  private _filteredData: FilterForm[];

  constructor(private overlay: Overlay) {
    this.delete$ = this.delete.asObservable();
    this.filterData$ = this.filterData.asObservable();
  }

  /** Delete Mentor service call from mentorservice */
  public deleteMentor(id: number) {
    this.delete.next(id);
  }

  componentRef: ComponentRef<FilterDataPresentationComponent>;
  overlayRef: OverlayRef;

  // Create Form overlay
  displayOverlay(departmentlist: Department[] | null) {
    console.log("okk");

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().right(),
    });

    const component = new ComponentPortal(FilterDataPresentationComponent);
    this.componentRef = this.overlayRef.attach(component);

    this.componentRef.instance.filterData.subscribe((res) => {
      this.filteredData(res);
      this.overlayRef.detach();
    });

    this.componentRef.instance.departmentList = departmentlist;
    
    this.componentRef.instance.closeOverlay.subscribe(() => {
      console.log("close");
      
      this.overlayRef.detach();
    });
    
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }
  filteredData(filters: any){
    this._filteredData = this._filteredData.filter((res)=>{
      return res.name = filters.name
    })
  }
  
}
