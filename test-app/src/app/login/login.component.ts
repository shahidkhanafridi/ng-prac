import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
