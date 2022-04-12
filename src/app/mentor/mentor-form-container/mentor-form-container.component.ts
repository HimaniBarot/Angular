import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/shared/models/department.model';
import { MentorForm } from '../model/mentor.model';
import { MentorService } from '../service/mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
})
export class MentorFormContainerComponent implements OnInit {

  private _id!: number;
  public mentorData$: Observable<MentorForm>

  /** Department list */
  public departmentList$: Observable<Department[]>;

  constructor(private mentorService: MentorService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.departmentList$ = new Observable();
    /** snapshot id */
    this._id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.mentorData$ = new Observable();

    if (this._id) {
      this.mentorData$ = this.mentorService.getMentorById(this._id);
    }
  }

  ngOnInit(): void {
    this.departmentList$ = this.mentorService.getDepartment();
  }

  /** Add mentor */
  addMentor(mentorForm: MentorForm) {
    this.mentorService.addMentor(mentorForm).subscribe(() => {
      alert('Data post success');
      this.router.navigateByUrl('/mentor/list');
    })
  }

  /** Edit mentor */
  editMentor(mentor: MentorForm) {
    this.mentorService.editMentorData(mentor, this._id).subscribe(() => {
      alert('Edit success')
      this.router.navigateByUrl('/mentor/list');
    })
  }
}
