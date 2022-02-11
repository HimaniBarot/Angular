import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeDetails } from '../../models/resume-details.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-resume-list-view',
  templateUrl: './resume-list-view.component.html',
  styleUrls: ['./resume-list-view.component.scss']
})
export class ResumeListViewComponent implements OnInit {

  constructor(private resumeDetailService: ResumeDetailsService, private router: Router, private route: ActivatedRoute) { }
  resumeDetails: ResumeDetails[];

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.resumeDetailService.getUserData().subscribe((data) => {
      this.resumeDetails = data;
    })
  }

  deleteUser(id: number) {
    this.resumeDetailService.deleteUser(id).subscribe((data) => {
      console.log('data deleted', data);
      this.getUserList();
    })
  }

  viewUserResume(id: number) {
    this.router.navigateByUrl(`/resume-builder/resume-view/${id}`);
  }
}
