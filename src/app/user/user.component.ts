import { Component ,Input ,EventEmitter ,Output} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userListTitle : string ='';
  @Input() PostIsLogin : boolean = false;

  childMessage : string = 'I am from the child component';

  parentMessage :string = 'message from event';

  @Output() MessageEvent = new EventEmitter
  sendMessage(){
    console.log('butten clicked');
    this.MessageEvent.emit(this.parentMessage)
  }
}
