import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/modules/crud-task/models/department.model';
import { Mentor } from '../../model/mentor.model';
import { MentorListPresenterService } from '../presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  private _mentorList: Mentor[];
  private _departmentlist: Department[];

  /** Setter for mentorlist */
  @Input() public set mentorList(value: Mentor[] | null) {
    if (value) {
      this._mentorList = value;
      // this.tempUserList = value;
    }
  }

  /** Getter for mentorlist */
  public get mentorList(): Mentor[] | null {
    return this._mentorList;
  }

  /** Setter for departmentlist */
  @Input() public set departmentlist(value: Department[] | null) {
    if (value) {
      this._departmentlist = value;
      // this.tempUserList = value;
    }
  }

  /** Getter for mentorlist */
  public get departmentlist(): Department[] | null {
    return this._departmentlist;
  }

  /** emits mentor id to be deleted */
  @Output() public delete: EventEmitter<number>;

  constructor(private mentorListPresenterService: MentorListPresenterService, private chaneDetectorRef: ChangeDetectorRef, private router: Router) {
    this._mentorList = [];

    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.deleteMentors();

    this.mentorListPresenterService.filterData$.subscribe((res : Mentor[])=>{
      console.log(res);
      this._mentorList = res;
      this.chaneDetectorRef.markForCheck();
      console.log("from tation", this._mentorList);
    })
  }

  /** on delete button click - listpresentation */
  public onDelete(id: number) {
    this.mentorListPresenterService.deleteMentor(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`/mentor/edit/${id}`);
  }
  
  /** Subscribe delete event */
  deleteMentors(){
    this.mentorListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    })
  }

  displayOverlay(){
    this.mentorListPresenterService.createOverlay(this.departmentlist,this._mentorList);
  }

}
