import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.scss'
})
export class ExpandableComponent {

  isExpanded = false;

  onExpandCompress(): void {
    this.isExpanded = !this.isExpanded;
  }
}
