import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapsAngularLibModule } from 'chaps-angular-lib';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ChapsAngularLibModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() imgSrc = '';

  @Output() onSeeDetailClicked = new EventEmitter();

  constructor() {}

  showProjectDetail(): void {
    this.onSeeDetailClicked.emit();
  }
}
