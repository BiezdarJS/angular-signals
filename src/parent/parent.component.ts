import { Component, DoCheck, signal, WritableSignal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements DoCheck {
  public testSignal: WritableSignal<number> = signal(1);

  public testValue: number = 1;

  increaseTestSignalValue() {
    this.testValue += 1;
  }

  ngDoCheck(): void {
    console.log('ng do check się wykonało');
  }
}
