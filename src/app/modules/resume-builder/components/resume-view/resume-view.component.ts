import { Component, OnInit } from '@angular/core';
import { ResumeDetails } from '../../models/resume-details.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  constructor(private resumeDetailService: ResumeDetailsService) { }

  resumeDetails: ResumeDetails;

  ngOnInit(): void {
    this.getResumeData();
  }

  getResumeData(){
    this.resumeDetailService.getUserData().subscribe((data) => {
      this.resumeDetails = data[data.length-1];
    })
  }

}
