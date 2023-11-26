import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-selector.component.html',
  styleUrl: './tech-selector.component.scss'
})
export class TechSelectorComponent {

  @Input() selected: boolean = false;
  @Input() label: string = '';
}
