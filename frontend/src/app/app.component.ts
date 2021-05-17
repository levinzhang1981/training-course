import {Component} from '@angular/core';
import {User} from './shared/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;

  constructor() {
  }

  logout() {
    // this.accountService.logout();
  }
}
