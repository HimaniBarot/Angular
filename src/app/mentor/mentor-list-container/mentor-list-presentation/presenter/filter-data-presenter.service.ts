import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FilterForm } from 'src/app/mentor/model/filter.model';

@Injectable()
export class FilterDataPresenterService {

  public filterFormData: Subject<FilterForm>;
  public filterFormData$: Observable<FilterForm>;

  constructor(private fb: FormBuilder) { 
    this.filterFormData = new Subject();
    this.filterFormData$ = new Observable();
    this.filterFormData$ = this.filterFormData.asObservable();
  }

  /** Create mentor form */
  public createFilterForm() {
    return this.fb.group({
      name: [''],
      department: []
    })
  }

  /** Send data to filter */
  onSubmitFilterData(filterDataForm: FormGroup) {
    // console.log(filterDataForm.value);
    this.filterFormData.next(filterDataForm.value);
  }
}
