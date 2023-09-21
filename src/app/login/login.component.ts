import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
  email: string = '';
  password: string = '';
  loginSuccess: boolean | null = null;
  ngOnInit(): void {
    
  }
  constructor(private router: Router) { }

  login() {
    // Check if the entered username and password are correct
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      this.loginSuccess = true;
      console.log(this.email)
      alert('success')
      this.router.navigate(['/welcome']);
    } else {
      this.loginSuccess = false;
      console.log(this.email)
      alert('invalid')
      
      
    }
    
  }
  

}
