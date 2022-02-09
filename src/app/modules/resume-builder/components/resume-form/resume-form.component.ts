import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeDetails } from '../../models/resume-details.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private resumeDetailService: ResumeDetailsService, private router : Router) { }

  ngOnInit(): void {
    this.buildResumeForm();
  }

  public resumeForm : FormGroup;
  experience : FormGroup;
  resumeDetails : ResumeDetails[];

  buildResumeForm(){
    this.resumeForm = this.fb.group({
      name : ['', Validators.required],
      designation : [''],
      email : [''],
      contactNumber : [],
      experience : [{
        company : '',
        position : '',
        description : '',
        duration : ''
      }]
    });
  }

  onSubmit(){
    if(this.resumeForm.status == 'VALID'){
      this.resumeDetailService.addResumeDetails(this.resumeForm.value).subscribe(() => {
        // debugger
        alert("Userdata Saved...");
        this.router.navigateByUrl('/resume-builder/resume-list-view');
      })
    } else{
      alert("Something went wrong");
    }
  }

  get getValues() {
    return this.resumeForm['controls'];
  }

}
