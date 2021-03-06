import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public app: AppComponent) {
    // app.openNav();
  }

  ngOnInit(): void {}
  open() {
    SidebarComponent.openNav();
    this.app.openNav();
  }
}
