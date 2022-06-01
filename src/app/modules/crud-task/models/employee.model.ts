export class Employee {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public contactNumber: number;
  public gender: string;
  public dateOfEmployment: string;
  public deparmentList: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: number,
    gender: string,
    dateOfEmployment: string,
    deparmentList: number,
  ) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.contactNumber = contactNumber;
  this.gender = gender;
  this.dateOfEmployment = dateOfEmployment;
  this.deparmentList = deparmentList;

}
}
