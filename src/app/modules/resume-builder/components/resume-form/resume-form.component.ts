import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildResumeForm();
    this.addNewSkill();
    this.addNewExperience();
    this.addNewEducation();
    this.id = this.route.snapshot.params['id'];
  }

  public resumeForm: FormGroup;
  experienceInfo: FormGroup;
  addSkill: FormArray = this.fb.array([]);
  addExperience: FormArray = this.fb.array([]);
  addEducation : FormArray = this.fb.array([]);
  resumeDetails: ResumeDetails[];
  id : number;

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

  // SKILL
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

  // EXPERIENCE
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
  deleteExperience(index:number){
    if(this.addExperience.length !=1){
      this.addExperience.removeAt(index);
    }
  }

  // EDUCATION
  addNewEducation() {
    this.addEducation.push(this.addEducationField());
  }
  addEducationField() {
    return this.fb.group({
      university: [''],
      result: ['']
    })
  }
  deleteEducation(index: number){
    if(this.addEducation.length !=1){
      this.addEducation.removeAt(index);
    }
  }

  // SAVE DATA
  onSubmit() {
    if (this.resumeForm.status == 'VALID') {
      this.resumeDetailService
        .addResumeDetails(this.resumeForm.value)
        .subscribe(() => {
          alert('Userdata Saved...');
          this.router.navigateByUrl('/resume-builder/resume-list-view');
        });
    } else {
      alert('Something went wrong');
    }
  }

  get getValues() {
    return this.resumeForm['controls'];
  }

  // CONVERT ABSTRACT CLASS INTO FORMGROUP FOR VALIDATION
  getFormGroup(abstractClass : AbstractControl) : FormGroup{
    return abstractClass as FormGroup;
  }
  
}
