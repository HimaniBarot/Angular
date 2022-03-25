import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/models/department.model';
import { MentorForm } from '../../model/mentor.model';
import { MentorFormPresenterService } from '../presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.scss'],
  viewProviders: [MentorFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  
  /** Setter departmentlist */
  @Input() public set departmentList(departmentData: Department[] | null) {
    if (departmentData) {
      this._departmentList = departmentData;
    }
  }
  
  /** Getter departmentlist */
  public get departmentList(): Department[] | null {
    return this._departmentList;
  }
  
  private _departmentList: Department[];
  private _mentorFormData!: MentorForm;

  /** setter for mentordata */
  @Input() public set mentorData(value : MentorForm | null) {
    // console.log(value);
    if (value) {
      // console.log(value);
      this.formTitle = 'Edit Mentor';
      // console.log(this.mentorForm);

      this.mentorForm.patchValue(value);
      this._mentorFormData = value;
    }
  }

  /** getter for mentordata */
  public get mentorData() : MentorForm | null {
    return this._mentorFormData;
  }

  @Output() public add: EventEmitter<MentorForm>;
  @Output() public edit: EventEmitter<MentorForm>;

  public mentorForm: FormGroup;
  public formTitle: string;

  constructor(private mentorFormPresenterService: MentorFormPresenterService, private location: Location) {
    this._departmentList = [];

    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Mentor';
  }

  ngOnInit(): void {
    this.mentorDataForm();
    this.createMentorForm();
  }

  createMentorForm() {
    this.mentorForm = this.mentorFormPresenterService.createMentorForm();
  }

  /** Subscribe mentor data */
  mentorDataForm() {
    this.mentorFormPresenterService.mentorFormData$.subscribe((res: MentorForm) => {
      if (this.mentorData) {
        this.edit.emit(res)
      } else {
        this.add.emit(res);
      }
    });
  }

  /** On submit button click */
  onSubmitMentor() {
    console.log(this.mentorForm);
    // debugger
    this.mentorFormPresenterService.addMentor(this.mentorForm);
  }

  onCancel() {
    this.location.back();
  }

  onReset(){
    this.mentorForm.reset();
  }

  get getControls(){
    return this.mentorForm['controls'];
  }

}
