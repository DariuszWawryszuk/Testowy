import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor( private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    const user = this.loginForm.value;
    this.authService.singIn(user).subscribe((res) => {
      console.log('Logged in!');
      if ( res.authorities[0].authority === 'ROLE_ADMIN') {
        this.router.navigateByUrl('admin/start');
      } else {
        this.router.navigateByUrl('user');
      }

    });
  }

}

