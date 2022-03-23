import { Component, OnInit } from '@angular/core';

export interface items {
  id: number;
  name: string;
  email: string;
  company: string;
}

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent implements OnInit {
  items = [
    {
      id: 1,
      name: 'abc',
      email: 'abc@mail.com',
      company: '1Rivet',
    },
    {
      id: 2,
      name: 'hhj',
      email: 'hj@mail.com',
      company: 'TCS',
    },
    {
      id: 3,
      name: 'hhj',
      email: 'hj@mail.com',
      company: 'TCS',
    },
    {
      id: 4,
      name: 'hhj',
      email: 'hj@mail.com',
      company: 'TCS',
    },
    {
      id: 5,
      name: 'hhj',
      email: 'hj@mail.com',
      company: 'TCS',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    let newObj = {
      id: 6,
      name: 'hhj',
      email: 'hj@mail.com',
      company: '1Rivet',
    };
    /** Create and add new object into array */
    this.items.push(newObj);
    console.log(this.items);

    /** Find array which has name abc */
    let itemFind = this.items.find((res) => res.name === 'hhj');
    console.log('Find', itemFind);

    /** Filter array which has name abc */
    let itemFilter = this.items.filter((res) => res.name === 'hhj');
    console.log('Filter', itemFilter);

    this.hi();
  }

  /** Find company named 1Rivet and replace it */
  hi() {
    let spread = JSON.parse(JSON.stringify(this.items))
    console.log('Array', spread);
    
    let modded = spread.map((res: any) => {
      if (res.company === '1Rivet') {
        res = {...res};
        res.company = "sss";
      }
      return res;
    });
    console.log('Replace', modded);
    console.log('Original', spread);
  }
}
