import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component , ViewChild, AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgFor,NgStyle,NgClass,HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'profile';
  isLoggedIn : boolean = true;
  userName : string = "Vikas";

  isAdmin : boolean= false;
  isMember : boolean = false;
  isGuest : boolean = true

  loginCount : number = 0;
  countLoginAttempts() {
    this.loginCount ++;
    console.log(this.loginCount);
  }

  userRole : string ="Admin";

  users : Array<string> = ['John','Vikas','Vishnu','Daksh'];

  userObject : Array<any> = [
    {id: 1, name : 'Raj' ,email:'raj@gmail.com'},
    {id: 2, name : 'Ravi' ,email:'ravi@gmail.com'},
    {id: 3, name : 'Kumar' ,email:'kumar@gmail.com'},
    {id: 4, name : 'Kiran' ,email:'kiran@gmail.com'},
  ]
    
  addNewUser() {
    let user = {id:5, name:'jon', email:'jon@gmail.com'};
    this.userObject.push(user);
  }

  removeUser() {
    this.userObject.pop();
  }

  // Array length index

  constructor(){
    console.log(this.userObject.length);
    console.log(this.childMessage);
  }

  userSwitch :string = "Member";

  isLoggedin:boolean = false;

  login:boolean=true;

  userTitle : string= 'User 2';
  appIsLogin : boolean=false;

  @ViewChild(UserComponent) childMessage:any;
  message:string = '';
    
  ngAfterViewInit(){
    console.log(this.childMessage);
    this.message = this.childMessage.childMessage;
  }
}