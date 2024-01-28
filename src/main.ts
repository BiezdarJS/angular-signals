import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Parent2Component } from './parent-2/parent-2.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, Parent2Component],
  template: `
    <app-parent></app-parent>
    <app-parent-2></app-parent-2>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
