import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Demo } from '../../demo.model';
import { DemoListPresenterService } from '../presenter/demo-list-presenter.service';

@Component({
  selector: 'app-demo-list-presentation',
  templateUrl: './demo-list-presentation.component.html',
  styleUrls: ['./demo-list-presentation.component.scss'],
  viewProviders: [DemoListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoListPresentationComponent implements OnInit {

  // data: Demo[];
  private _details: Demo[];
  public isDepartment: any = ["Frontend", "Backend", ".net"];

  @Input() public set details(value: Demo[] | null){
    if(value){
      this._details = value;
    }
  }

  public get details(): Demo[] | null{
    return this._details;
  }

  constructor(private _demoListPresenter: DemoListPresenterService, private _cdr : ChangeDetectorRef) {  }

  ngOnInit(): void {
    this._cdr.markForCheck();
  }

  public onChangeDepartment(val: any){
    console.log(val.value);
  }
  

}
