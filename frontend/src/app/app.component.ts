import {Component} from '@angular/core';
import {User} from './shared/model/user';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: 'admin',
    },
    {
      label: 'Users',
      routerLink: 'admin/users'
    },
    {
      label: 'Add User',
      routerLink: 'admin/user/-1'
    },
    {
      label: 'Login',
      routerLink: 'auth'
    }
  ];

  constructor() {
  }

  logout() {
    // this.accountService.logout();
  }
}
