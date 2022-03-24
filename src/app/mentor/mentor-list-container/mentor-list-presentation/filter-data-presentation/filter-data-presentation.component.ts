import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { FilterDataPresenterService } from '../presenter/filter-data-presenter.service';

@Component({
  selector: 'app-filter-data-presentation',
  templateUrl: './filter-data-presentation.component.html',
  styleUrls: ['./filter-data-presentation.component.scss'],
  viewProviders: [FilterDataPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDataPresentationComponent implements OnInit {

  constructor(private filterDataPresenter: FilterDataPresenterService) {
    this.closeOverlay = new EventEmitter();
  }

  public filterForm: FormGroup;
  @Input() public departmentList: Department[] | null;

  @Output() public closeOverlay: EventEmitter<Event>; 

  @Output() public filterData: EventEmitter<any>; 

  ngOnInit(): void { 
    this.filterForm = this.filterDataPresenter.createFilterForm();
  }

  onClose(){
    this.closeOverlay.emit();
  }

  onSubmit(){
    console.log("filter");
    this.filterData.emit(this.filterForm.value);
  }

}
