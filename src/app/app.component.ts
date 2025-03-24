import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl: string = 'https://bridgelabz.com/assets/images/bridgelabz_com_logo.jpg';  // Logo image URL
  userName: string = '';  // User input for name
  userNameValid: boolean = true;  // Flag to track validity of input

  // Method to open the website in a new tab
  openWebsite(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  // Method to validate user input
  validateUserName(): void {
    // Check if the name is valid: at least 3 characters and first letter capitalized
    const regex = /^[A-Z][a-z]{2,}$/;  // Regex for valid name with initial capital and min 3 letters
    this.userNameValid = regex.test(this.userName);  // Set validity based on regex
  }
}
