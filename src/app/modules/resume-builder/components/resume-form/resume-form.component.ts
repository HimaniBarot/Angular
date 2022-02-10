import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit(): void {
    this.buildResumeForm();
    this.addNewSkill();
    this.addNewExperience();
    this.addNewEducation();
  }

  public resumeForm: FormGroup;
  experienceInfo: FormGroup;
  addSkill: FormArray = this.fb.array([]);
  addExperience: FormArray = this.fb.array([]);
  addEducation : FormArray = this.fb.array([]);
  resumeDetails: ResumeDetails[];

  buildResumeForm() {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      designation: [''],
      email: [''],
      contactNumber: [],
      skills: this.addSkill,
      experience: this.addExperience,
      education : this.addEducation
    });
  }

  get f(){
    return this.resumeForm.controls;
  }
  // ADD NEW SKILL
  addNewSkill() {
    this.addSkill.push(this.addSkillField());
  }
  addSkillField() {
    return this.fb.group({
      techSkill: ['', Validators.required]
    })
  }

  deleteSkill(index : number){
    if(this.addSkill.length !=1){
      this.addSkill.removeAt(index);
    }
  }

  // ADD NEW EXPERIENCE
  addNewExperience() {
    this.addExperience.push(this.addExperienceField());
  }
  addExperienceField() {
    return this.fb.group({
      company: [''],
      position: [''],
      description: [''],
      duration: [''],
    })
  }

  // ADD NEW EDUCATION
  addNewEducation() {
    this.addEducation.push(this.addEducationField());
  }
  addEducationField() {
    return this.fb.group({
      university: [''],
      result: ['']
    })
  }

  onSubmit() {
    if (this.resumeForm.status == 'VALID') {
      this.resumeDetailService
        .addResumeDetails(this.resumeForm.value)
        .subscribe(() => {
          alert('Userdata Saved...');
          this.router.navigateByUrl('/resume-builder/resume-view');
        });
    } else {
      alert('Something went wrong');
    }
  }

  get getValues() {
    return this.resumeForm['controls'];
  }

  // CONVERT ABSTRACT CLASS INTO FORMGROUP
  getFormGroup(abstractClass : AbstractControl) : FormGroup{
    return abstractClass as FormGroup;
  }
  
}
