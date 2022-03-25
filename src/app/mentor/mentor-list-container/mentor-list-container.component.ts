import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/app/shared/models/department.model';
import { Mentor } from '../model/mentor.model';
import { MentorService } from '../service/mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {
  
  /** Mentor list data */
  public mentorList$: Observable<Mentor[]>;
  public departmentList$: Observable<Department[]>;

  constructor(private mentorService: MentorService) { 
    this.mentorList$ = new Observable();
  }

  ngOnInit(): void {
    // this.getMentorList();
    this.mentorList$ = this.mentorService.getMentors();
    this.departmentList$ = this.mentorService.getDepartment();
  }

  /** Get mentor list */
  // public getMentorList(){
    // this.mentorList$ = this.mentorService.getMentors();
  // }

  /** Delete Mentor */
  public deleteMentor(id: number) {
    this.mentorService.deleteMentorData(id).subscribe(
      () => {
        this.mentorList$ = this.mentorService.getMentors();
      }
    )
  }

}
