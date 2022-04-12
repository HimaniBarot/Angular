import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  public newMsg: string = "Hello";
  public newMessage: string = "Hi";
  public newDate: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    alert(newItem);
  }

  data = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }
  ]

  currData = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "country": "0.259",
      "completed": true
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "country": "0.259",
      "completed": true
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "country": "0.259",
      "completed": false
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "country": "0.259",
      "completed": true
    }
  ]

}
