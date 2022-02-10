export class ResumeDetails {
  id: number;
  name: string;
  designation : string;
  email: string;
  contactNumber: number;
  skills: TechSkills[];
  experience: ExperienceDetails[];
  education : EducationDetails[];
}
class ExperienceDetails {
  company: string;
  position: string;
  description: string;
  duration: string;
}
 class TechSkills{
  techSkill : string;
 }
 class EducationDetails{
  university: string;
  result: number;
 }