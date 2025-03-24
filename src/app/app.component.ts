import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl: string = 'https://bridgelabz.com/assets/images/bridgelabz_com_logo.jpg';  // Logo image URL
  userName: string = '';  // Property to store user input name

  // Method to open the website in a new tab
  openWebsite(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
