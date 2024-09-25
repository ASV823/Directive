import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  userRole : string ="Member";
}
