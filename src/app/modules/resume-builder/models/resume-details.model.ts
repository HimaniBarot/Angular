export class ResumeDetails {
  id: number;
  name: string;
  email: string;
  contactNumber: number;
  experience: experienceInfo[];
}
class experienceInfo{
  company : string;
  position : string;
  description : string;
  duration : number;
}
