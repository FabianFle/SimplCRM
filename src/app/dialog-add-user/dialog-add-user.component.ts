import { Component } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;


  saveUser() {
    this.user.birthsDate = this.birthDate.getTime();
    console.log('user =', this.user)
  }

}
