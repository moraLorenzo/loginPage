import { Component } from '@angular/core';

/**
 * Setup the decorator and set selector templateURl and styleURLs
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Initialize Component
 */
export class AppComponent {
  /**
   * Set title property as 'loginPage'
   */
  title = 'loginPage';
}
