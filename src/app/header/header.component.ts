import { AfterContentChecked, AfterViewInit, Component ,DoCheck,Input,OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, OnDestroy{

  @Input() pUserName : string = '';
  counter:number=0;

  ngOnChanges(){
    console.log("Onchange triggred");   
  }

  ngOnInit() {
    console.log("ng OnOnit Triggered");
      
  }
  ngDoCheck() {
    console.log("ng docheck triggered");
  }

  incrementCounter(){
    this.counter ++;
  }

  ngAfterContentChecked(){
    console.log('AfterContent Checked Triggred');
    
  }
  ngAfterViewInit(){
    console.log('Afterview Init Triggred');
  }
  ngOnDestroy(){
    console.log('ng OnDestroy Triggred');
    
  }

}
