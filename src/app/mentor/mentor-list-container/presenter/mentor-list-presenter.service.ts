import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, IterableDiffers } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { Mentor, MentorForm } from '../../model/mentor.model';
import { FilterDataPresentationComponent } from '../mentor-list-presentation/filter-data-presentation/filter-data-presentation.component';

@Injectable()

export class MentorListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  private filterData: Subject<any>;
  public filterData$: Observable<any>;


  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();
    this.filterData = new Subject();
    this.filterData$ = this.filterData.asObservable();
  }

  /** Delete Mentor service call from mentorservice */
  public deleteMentor(id: number) {
    this.delete.next(id);
  }

  public filteredMentorData(filteredData: Mentor[]) {
    this.filterData.next(filteredData);
  }

  componentRef: ComponentRef<FilterDataPresentationComponent>;
  overlayRef: OverlayRef;

  // Create Form overlay
  createOverlay(departmentlist: Department[] | null, mentorlist: Mentor[]) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().right(),
    });

    const component = new ComponentPortal(FilterDataPresentationComponent);
    this.componentRef = this.overlayRef.attach(component);

    this.componentRef.instance.departmentList = departmentlist;

    this.componentRef.instance.sendDataToFilter.subscribe((filterRes) => {
      this.filteredData(mentorlist, filterRes)
      console.log(filterRes);
    });

    /** Close overlay on button click */
    this.componentRef.instance.closeOverlay.subscribe(() => {
      this.overlayRef.detach();
    });

    /** Close overlay on backdrop */
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }

  filteredData(mentorlist: Mentor[], filters: any) {
    // console.log(filters);
    mentorlist = mentorlist.filter(user => {
      // console.log("from list presenter", user.name);
      return user.name?.toLowerCase() == filters.name?.toLowerCase();
    })
    console.log(mentorlist);
    this.filteredMentorData(mentorlist);
  }

}
