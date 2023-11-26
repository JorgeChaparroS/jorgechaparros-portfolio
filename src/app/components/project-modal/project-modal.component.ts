import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapsAngularLibModule } from 'chaps-angular-lib';
import { Constants } from '../../utils/Contants';
import { Project } from '../../model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, ChapsAngularLibModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  modalId = Constants.COMPONENTS.PROJECT_MODAL.ID;

  @Input() projectInfo!: Project|any;

}
