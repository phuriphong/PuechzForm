import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  currentUser: any;
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,  private router: Router ,
    private authService: AuthService) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.compose([
        Validators.required,
        //Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])]
    });
  }
  login() {
    console.log("sss");
    const user = { ...this.loginForm.value }; // Object.assign({}, this.user, loginForm.value);
    this.authService.login(user.username, user.password).subscribe(data => {
      if (data) {
        this.currentUser = data;
        console.log(this.currentUser);
        const role = this.currentUser.roles;

        if (role === 'ADMIN') {
          this.router.navigateByUrl('/tabs/dashboard');
        } else if (role === 'USER') {
          this.router.navigateByUrl('/tabs/user/dashboard');
        }
      }
    });
  }

}
