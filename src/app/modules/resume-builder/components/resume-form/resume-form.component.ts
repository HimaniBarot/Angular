import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeDetails } from '../../models/resume-details.model';
import { ResumeDetailsService } from '../../services/resume-details.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private resumeDetailService: ResumeDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildResumeForm();
  }

  public resumeForm: FormGroup;
  experienceInfo: FormGroup;
  skills: [];
  resumeDetails: ResumeDetails[];

  buildResumeForm() {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      designation: [''],
      email: [''],
      contactNumber: [],
      experienceInfo: this.fb.group({
        company: [''],
        position: [''],
        description: [''],
        duration: [''],
      }),
      skills: this.fb.array([]),
      // skills: this.fb.array([
      //   {
      //     techSkills: [''],
      //   },
      // ]),
    });
  }

  addNewSkill() {
    const addSkill = this.resumeForm.get('skills') as FormArray;
    addSkill.push(
      this.fb.group({
        techSkills: ['aa'],
      })
    );
  }

  // get getSkills = resumeForm.['controls']

  // dynamicData(): FormGroup {
  //   return this.fb.group({
  //     techSkills: ['aa'],
  //   });
  // }

  // addSkill(){
  //   this.skills = this.getSkill as FormArray;
  //   this.skills.push(this.dynamicData())
  // }
  // addSkills() {
  //   this.skills = this.resumeForm.get('skills') as FormArray;
  //   this.skills.push(this.dynamicData());
  // }

  onSubmit() {
    // console.log(this.resumeForm.value);
    if (this.resumeForm.status == 'VALID') {
      this.resumeDetailService
        .addResumeDetails(this.resumeForm.value)
        .subscribe(() => {
          // debugger
          alert('Userdata Saved...');
          this.router.navigateByUrl('/resume-builder/resume-list-view');
        });
    } else {
      alert('Something went wrong');
    }
  }

  // get company(): any {
  //   return this.resumeForm.get('experience.company');
  // }

  get getValues() {
    return this.resumeForm['controls'];
  }
  // get getSkill() {
  //   return this.skills['controls'];
  // }
}
