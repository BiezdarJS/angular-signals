import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-2',
  standalone: true,
  templateUrl: './parent-2.component.html',
  styleUrls: ['./parent-2.component.css'],
})
export class Parent2Component implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnInit() {
    console.log('Komponent Parent 2 został uruchomiony');
  }

  checkRender(): void {
    console.log('parent 2 się przerenderował');
  }
}
