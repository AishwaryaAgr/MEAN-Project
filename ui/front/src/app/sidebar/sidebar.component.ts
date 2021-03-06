import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public app: AppComponent) {}

  ngOnInit(): void {}
  static openNav() {
    document.getElementById('mySidebar').style.width = '18%';
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    this.app.closeNav();
  }
}
