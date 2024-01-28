import {
  Component,
  DoCheck,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, DoCheck {
  constructor() {}

  ngOnChanges(): void {
    console.log('ng on changes się wykonało');
  }

  ngDoCheck(): void {
    console.log('ng do check w child się wykonało');
  }
}
