import { Component, OnInit } from '@angular/core';
import { MvpUserService } from '../service/mvp-user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  constructor(private mvpUserService: MvpUserService) { }

  ngOnInit(): void {
  }

}
