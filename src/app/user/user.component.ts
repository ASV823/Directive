import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userListTitle : string ='';
  @Input() PostIsLogin : boolean = false;

  childMessage : string = 'I am from the child component';
}
