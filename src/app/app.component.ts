import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'w2j';

  isOpenMenu = false;

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
