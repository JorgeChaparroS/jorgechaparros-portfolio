import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapsAngularLibModule, DropdownOption } from 'chaps-angular-lib';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../utils/Contants';
import { TechSelectorComponent } from '../../components/tech-selector/tech-selector.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ChapsAngularLibModule, FormsModule, TechSelectorComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  technologySelected = null;
  technologyOptions: DropdownOption[] = [
    { value: Constants.TECHNOLOGY_OPTIONS.FRONTEND, name: 'Front-end' },
    { value: Constants.TECHNOLOGY_OPTIONS.BACKEND, name: 'Back-end' },
    { value: Constants.TECHNOLOGY_OPTIONS.FULLSTACK, name: 'Full-stack' },
    { value: Constants.TECHNOLOGY_OPTIONS.ALL, name: 'All' }
  ];

  contributionSelected = null;
  contributionOptions: DropdownOption[] = [
    { value: Constants.CONTRIBUTION_OPTIONS.OWN, name: 'Own projects' },
    { value: Constants.CONTRIBUTION_OPTIONS.TEAM, name: 'Collaborative projects' },
    { value: Constants.CONTRIBUTION_OPTIONS.ALL, name: 'All' }
  ];

  availableTechnologies: any[] = Constants.TECHNOLOGIES;

  onSearch(): void {
    console.log('onSearch', this.technologySelected, this.contributionSelected, this.availableTechnologies);
  }

  onTechSelected(index: number): void {
    this.availableTechnologies[index].selected = !(this.availableTechnologies[index].selected || false);
  }

  onClearSearch(): void {
    this.technologySelected = null;
    this.contributionSelected = null;
    this.availableTechnologies.forEach((technology: any) => technology.selected = false);
    this.onSearch();
  }
}
