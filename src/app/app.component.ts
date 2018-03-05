import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  video = {
    title: 'Despacito',
    views: 2,
    liked: true
  }

  isShown: boolean = false

  handleClick(){
    console.log('someone clicked the 'Like' button on the template :-)')
  }
  handleParagraph(){
    if(this.isShown == false) {
      return this.isShown = true;
    }
    else{
      return this.isShown = false;
    }

  }
}
