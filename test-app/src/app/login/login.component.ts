// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormControl  } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string | undefined;
//   password: string | undefined;
//   onSubmit() {
//     // Add your login logic here
//     console.log('Username:', this.username);
//     console.log('Password:', this.password);
//   }
// }


import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['shdsgdhsgd@test.com',[Validators.required, Validators.email]],
      password: ['sdh5263d@fg', Validators.required]
    });
  }

  login(): void{
    if(this.loginForm.valid){
      const {email, password}=this.loginForm.value;
      console.log("Email", email);
      console.log('Password', password);
      this.router.navigate(['/dashboard']);
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
}