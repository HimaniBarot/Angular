import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/models/department.model';
import { FilterDataPresenterService } from '../presenter/filter-data-presenter.service';

@Component({
  selector: 'app-filter-data-presentation',
  templateUrl: './filter-data-presentation.component.html',
  styleUrls: ['./filter-data-presentation.component.scss'],
  viewProviders: [FilterDataPresenterService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDataPresentationComponent implements OnInit {

  public filterForm: FormGroup;
  @Input() public departmentList: Department[] | null;

  @Output() public closeOverlay: EventEmitter<Event>; 
  @Output() public sendDataToFilter: EventEmitter<any>;
<<<<<<< HEAD
=======
  // @Output() public onSubmitFilterData: EventEmitter<any>;
>>>>>>> b432ca06bb506a492545e6f46ae992c519f93be9

  constructor(private filterDataPresenter: FilterDataPresenterService) {
    this.closeOverlay = new EventEmitter();
    this.sendDataToFilter = new EventEmitter();
  }

  ngOnInit(): void { 
    this.filterForm = this.filterDataPresenter.createFilterForm();
  }

  onClose(){
    this.closeOverlay.emit();
  }

  public onSubmit(){
    console.log("filter");
    this.sendDataToFilter.emit(this.filterForm.value);
    this.onClose();
  }

}
