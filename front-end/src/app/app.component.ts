import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'XMEME';
  memePosted:boolean = false;

  memePostSubmit(event){
    if(event)
    this.memePosted = true;
  }

}
