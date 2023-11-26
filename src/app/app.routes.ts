import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    }, 
    {
        path: 'projects',
        title: 'JorgeChaparro`S Portfolio - Projects',
        loadComponent: () => import('./pages/projects/projects.component').then(component => component.ProjectsComponent)
    }, 
    {
        path: 'about', 
        title: 'JorgeChaparro`S Portfolio - About',
        loadComponent: () => import('./pages/about/about.component').then(component => component.AboutComponent)
    },
    {
        path: 'author',
        title: 'JorgeChaparro`S Portfolio - Author',
        loadComponent: () => import('./pages/author/author.component').then(component => component.AuthorComponent)
    }
];
