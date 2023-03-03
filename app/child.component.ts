import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Output() filterModified = new EventEmitter<{filterElement}>();
  @ViewChild('gb') gb: any;
}