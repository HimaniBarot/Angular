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

<<<<<<< HEAD
  /** Send data to filter */
=======
  /** Send mentor to add */
>>>>>>> b432ca06bb506a492545e6f46ae992c519f93be9
  onSubmitFilterData(filterDataForm: FormGroup) {
    // console.log(filterDataForm.value);
    this.filterFormData.next(filterDataForm.value);
  }
}
