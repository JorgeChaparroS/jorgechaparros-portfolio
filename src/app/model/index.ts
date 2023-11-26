export interface Project {
    title: string; 
    image: string; 
    approach: string;
    technologies: string[];
    description: string[]; 
    contributionType: string; 
    appLink?: string;
    repository: {label: string, link: string}[]; 
};