import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService, ChapsAngularLibModule, DropdownOption } from 'chaps-angular-lib';
import { FormsModule } from '@angular/forms';
import { Constants } from '../../utils/Contants';
import { TechSelectorComponent } from '../../components/tech-selector/tech-selector.component';
import { Project } from '../../model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectModalComponent } from '../../components/project-modal/project-modal.component';
import { ExpandableComponent } from '../../components/expandable/expandable.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ChapsAngularLibModule, FormsModule, TechSelectorComponent, ProjectCardComponent, ProjectModalComponent, ExpandableComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  technologyApproachSelected = null;
  technologyApproachOptions: DropdownOption[] = [
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

  projects: Project[] = Constants.PROJECTS;
  projectSelected: Project|any; 

  constructor(private readonly modalService: AlertService) {}

  onSearch(): void {
    const technologiesSelected = this.availableTechnologies.filter((technology: any) => technology.selected);
    const stackSelected = technologiesSelected.map((technology: any) => technology.value);
    this.projects = Constants.PROJECTS
        .filter((project: Project) => this.matchesProjectType(project))
        .filter((project: Project) => this.matchesContributionType(project))
        .filter((project: Project) => this.implementsSelectedTechStack(project, stackSelected));
  }

  matchesProjectType(project: Project): boolean {
    if (!this.technologyApproachSelected || this.technologyApproachSelected === Constants.TECHNOLOGY_OPTIONS.ALL) {
      return true;
    } else {
      return project.approach === this.technologyApproachSelected;
    }
  }

  matchesContributionType(project: Project): boolean {
    if (!this.contributionSelected || this.contributionSelected === Constants.CONTRIBUTION_OPTIONS.ALL) {
      return true;
    } else {
      return project.contributionType === this.contributionSelected;
    }
  }

  implementsSelectedTechStack(project: Project, projectStack: string[]): boolean {
    if (projectStack.length < 1) {
      return true;
    } else {
      for (let techStack of projectStack) {
        const techAppliedInProject = project.technologies.find((techInProject: string) => techStack === techInProject);
        if (!techAppliedInProject) {
          return false;
        }
      }
      return true;
    }
  };

  onTechSelected(index: number): void {
    this.availableTechnologies[index].selected = !(this.availableTechnologies[index].selected || false);
  }

  onClearSearch(): void {
    this.technologyApproachSelected = null;
    this.contributionSelected = null;
    this.availableTechnologies.forEach((technology: any) => technology.selected = false);
    this.onSearch();
  }

  openModalDetail(project: Project): void {
    this.projectSelected = project;
    this.modalService.open(Constants.COMPONENTS.PROJECT_MODAL.ID);
  }
}
