import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgURl="https://bridgelabz.com/assets/bridgeLabz_com_logo.jpg";

  ngOnInit():void{
    this.title="Hello from Bridgelabz";
  }
}
