import { Component, OnInit } from '@angular/core';
import { navItems } from './side-items';
import { NavItems } from './side-items.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public sidebarItems: NavItems[] = navItems;
  constructor() { }

  ngOnInit(): void {
  }

}
