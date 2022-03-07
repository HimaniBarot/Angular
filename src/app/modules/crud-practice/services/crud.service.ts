import { Injectable } from '@angular/core';
// import { CrudPracticeModule } from '../crud-practice.module';
import { Employee } from '../models/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private data: Employee[] = [
    {
      id: 1,
      name: "Hrishi",
      email: "hrishikesh@gmail.com",
      company: "1Rivet"
    },
    {
      id: 2,
      name: "Jay",
      email: "jay@gmail.com",
      company: "1Rivet"
    },
    {
      id: 3,
      name: "Tanmay",
      email: "tanmay@gmail.com",
      company: "1Rivet"
    },
    {
      id: 4,
      name: "Om",
      email: "om@gmail.com",
      company: "1Rivet"
    },
    {
      id: 5,
      name: "Nirali",
      email: "nirali@gmail.com",
      company: "1Rivet"
    },
    {
      id: 6,
      name: "Jigar",
      email: "jigar@gmail.com",
      company: "1Rivet"
    },
    {
      id: 7,
      name: "Himani",
      email: "himani@gmail.com",
      company: "1Rivet"
    },
    {
      id: 8,
      name: "Himani",
      email: "himani@gmail.com",
      company: "1Rivet"
    },
    {
      id: 9,
      name: "Himani",
      email: "himani@gmail.com",
      company: "1Rivet"
    },
    {
      id: 10,
      name: "Himani",
      email: "himani@gmail.com",
      company: "1Rivet"
    },
  ];

  constructor() {
  }

  getData(): Employee[] {
    return this.data;
  }

  getById(id: number): Employee | undefined {
    return this.data.find(
      (res) => {
        return res.id === id;
      }
    );
  }

  editData(id: number, newData: Employee): void {
    // this.data[this.data.findIndex((val) => id == val.id)] = {...this.getById(id), ...newData};
    newData.id = id;
    this.data[this.data.findIndex((val) => id == val.id)] = newData;
  }
  deleteData(id: number): void{
    this.data.splice(this.data.findIndex((val) => id == val.id), 1)

  }


  // getById(name: string): Employee[] | undefined {
  //   return this.data.filter(
  //     (emp) => {
  //       return emp.name === name;
  //     }
  //   );
  // }
}
