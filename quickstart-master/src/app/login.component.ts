import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService }  from './login.service';
import { Credentials }  from './credentials';

@Component({
  selector: 'login',
  template: `<h1>Login</h1>
  <div>
  <div><label>User</label><input type="text" [(ngModel)]="userName"></div>
  <div><label>Password</label><input type="text" [(ngModel)]="password"></div>
  <div><button (click)='validateUser();'>Sign-in</button>
  <button (click)='add();'>Sign-up</button></div>
  <ul>
  <li *ngFor="let user of credentials">
    <span>{{user.username}}</span> ------
    <span>{{user.password}}</span>
    </li>
</ul>
  </div>`,
})
export class LoginComponent implements OnInit { 
  private userName : string;
  private password : string;
  private credentials : Credentials[];
  private errorMsg : string;
  constructor(private router: Router,private loginService: LoginService){

  }
    getCredentials(): void {
    this.loginService
        .getCredentials()
        .then(credentials => this.credentials = credentials);
  }
  add(): void {
     let usrnm : string = this.userName.trim();
     let pswd : string = this.password.trim();
    if (!usrnm && !pswd) { return; }
    this.loginService.create(usrnm,pswd)
      .then(credential => {
        this.credentials.push(credential);
      });
  }
  validateUser(){
    if(this.isUser()){
        this.router.navigate(['/home']);
    }
    else {alert(this.errorMsg);}      
  }
  isUser():boolean{
      let validUser : boolean = false;
      for(let i=0;i<this.credentials.length;i++){
        if(this.userName == this.credentials[i].username){
            if(this.password == this.credentials[i].password){
                validUser = true;
            }
            this.errorMsg = 'Incorrect Password';
            return validUser;
        }
        this.errorMsg = 'Invalid UserName';
      }
      return validUser;
  }
  ngOnInit(){
    this.getCredentials();
  }
 }
