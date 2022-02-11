import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumeDetails } from '../../models/resume-details.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  constructor(private resumeDetailService: ResumeDetailsService, private route: ActivatedRoute) { }

  resumeDetails: ResumeDetails;

  ngOnInit(): void {
    this.getResumeData(this.route.snapshot.params['id']);
  }

  getResumeData(id: number){
    this.resumeDetailService.getById(id).subscribe((data) => {
      this.resumeDetails = data;
    })
  }

}
