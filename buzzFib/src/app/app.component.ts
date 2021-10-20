import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buzzFib';
  options = {
    bottom: 0,
    fixed: true,
    top: 0
  };
}
