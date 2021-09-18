import { Component } from '@angular/core';

import { 
  NbLayoutComponent, 
  NbLayoutHeaderComponent,
  NbLayoutColumnComponent
 } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSandbox';
}
