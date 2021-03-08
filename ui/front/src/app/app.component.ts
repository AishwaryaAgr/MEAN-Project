import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  side = '18vw';
  openNav() {
    this.side = '18vw';
  }
  closeNav() {
    this.side = '0vw';
  }
}
