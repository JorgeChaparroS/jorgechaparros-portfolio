import { Project } from "../model";

export class Constants {

    static readonly TECHNOLOGY_OPTIONS = {
        FRONTEND: 'FRONTEND',
        BACKEND: 'BACKEND',
        FULLSTACK: 'FULLSTACK',
        ALL: 'ALL'
    };

    static readonly CONTRIBUTION_OPTIONS = {
        OWN: 'OWN',
        TEAM: 'TEAM',
        ALL: 'ALL'
    };

    static readonly TECHNOLOGY_TYPE = {
        ANGULAR: { value: 'ANGULAR', name: 'Angular'},
        REACT: { value: 'REACT', name: 'React'},
        BOOTSTRAP: { value: 'BOOTSTRAP', name: 'Bootstrap'},
        HTML: { value: 'HTML', name: 'HTML'},
        CSS: { value: 'CSS', name: 'CSS'},
        SCSS: { value: 'SCSS', name: 'SCSS'},
        TYPESCRIPT: { value: 'TYPESCRIPT', name: 'TypeScript'},
        JAVASCRIPT: { value: 'JAVASCRIPT', name: 'JavaScript'},
        NEXTJS: { value: 'NEXTJS', name: 'NextJS'},
        UNITTESTING: { value: 'UNITTESTING', name: 'Unit testing'},
        DEPENDENCY: { value: 'DEPENDENCY', name: 'Dependency/Library' },
        APPLICATION: { value: 'APPLICATION', name: 'Application' }
    };

    static readonly TECHNOLOGIES = [
        Constants.TECHNOLOGY_TYPE.ANGULAR,
        Constants.TECHNOLOGY_TYPE.REACT,
        Constants.TECHNOLOGY_TYPE.BOOTSTRAP,
        Constants.TECHNOLOGY_TYPE.HTML,
        Constants.TECHNOLOGY_TYPE.CSS,
        Constants.TECHNOLOGY_TYPE.SCSS,
        Constants.TECHNOLOGY_TYPE.TYPESCRIPT,
        Constants.TECHNOLOGY_TYPE.JAVASCRIPT,
        Constants.TECHNOLOGY_TYPE.NEXTJS,
        Constants.TECHNOLOGY_TYPE.UNITTESTING,
        Constants.TECHNOLOGY_TYPE.DEPENDENCY,
        Constants.TECHNOLOGY_TYPE.APPLICATION
    ];

    static readonly COMPONENTS = {
        PROJECT_MODAL: {
            ID: 'project-detail-modal'
        }
    };

    static readonly PROJECTS: Project[] = [
        {
            title: 'Naruto Wiki (Angular)',
            image: '../../../assets/images/naruto-wiki-angular.png',
            approach: Constants.TECHNOLOGY_OPTIONS.FRONTEND,
            technologies: [
                Constants.TECHNOLOGY_TYPE.ANGULAR.value,
                Constants.TECHNOLOGY_TYPE.BOOTSTRAP.value,
                Constants.TECHNOLOGY_TYPE.HTML.value,
                Constants.TECHNOLOGY_TYPE.CSS.value,
                Constants.TECHNOLOGY_TYPE.SCSS.value,
                Constants.TECHNOLOGY_TYPE.TYPESCRIPT.value,
                Constants.TECHNOLOGY_TYPE.UNITTESTING.value,
                Constants.TECHNOLOGY_TYPE.APPLICATION.value,
            ],
            description: [
                'This is an Angular project that uses some of the main tools for this framework, such as: components, services, routing, modules, lazy loading, reactive forms, API calls, Http interceptors.',
                'Other tools for front end development were use, such as: Bootstrap, CSS preprocessors, internationalization, unit testing.'
            ],
            contributionType: Constants.CONTRIBUTION_OPTIONS.OWN,
            appLink: 'https://naruto-wiki-jorgechaparros-dev.netlify.app',
            repository: [
                { label: 'Github repository', link:'https://github.com/JorgeChaparroS/naruto-angular' }
            ]
        },
        {
            title: 'Naruto Wiki (React)',
            image: '../../../assets/images/naruto-wiki-react.png',
            approach: Constants.TECHNOLOGY_OPTIONS.FRONTEND,
            technologies: [
                Constants.TECHNOLOGY_TYPE.REACT.value,
                Constants.TECHNOLOGY_TYPE.BOOTSTRAP.value,
                Constants.TECHNOLOGY_TYPE.HTML.value,
                Constants.TECHNOLOGY_TYPE.CSS.value,
                Constants.TECHNOLOGY_TYPE.SCSS.value,
                Constants.TECHNOLOGY_TYPE.JAVASCRIPT.value,
                Constants.TECHNOLOGY_TYPE.NEXTJS.value,
                Constants.TECHNOLOGY_TYPE.APPLICATION.value,
            ],
            description: [
                'This is a NextJS (React Framework) project that uses some of the main tools for this framework, such as: components, routing, API calls.',
                'Other tools for front end development were use, such as: Bootstrap, CSS preprocessors, internationalization'
            ],
            contributionType: Constants.CONTRIBUTION_OPTIONS.OWN,
            appLink: 'https://naruto-wiki-jorgechaparros-dev-react.netlify.app/',
            repository: [
                { label: 'Github repository', link:'https://github.com/JorgeChaparroS/naruto-react' }
            ]
        },
        {
            title: 'Chaps-Angular-lib',
            image: '../../../assets/images/chaps-angular-lib.png',
            approach: Constants.TECHNOLOGY_OPTIONS.FRONTEND,
            technologies: [
                Constants.TECHNOLOGY_TYPE.ANGULAR.value,
                Constants.TECHNOLOGY_TYPE.BOOTSTRAP.value,
                Constants.TECHNOLOGY_TYPE.HTML.value,
                Constants.TECHNOLOGY_TYPE.CSS.value,
                Constants.TECHNOLOGY_TYPE.SCSS.value,
                Constants.TECHNOLOGY_TYPE.TYPESCRIPT.value,
                Constants.TECHNOLOGY_TYPE.DEPENDENCY.value,
            ],
            description: [
                'This is an Angular Library whose purpose is to store reusable Angular components, so they can be use in every Angular project the dependency is defined in, without the need of defining them again.'
            ],
            contributionType: Constants.CONTRIBUTION_OPTIONS.OWN,
            appLink: 'https://chaps-angular-lib.netlify.app/',
            repository: [
                { label: 'Github repository', link:'https://github.com/JorgeChaparroS/naruto-react' },
                { label: 'Package in NPM', link:'https://www.npmjs.com/package/chaps-angular-lib' },
                { label: 'Implementing the library in other projects', link:'https://github.com/JorgeChaparroS/chaps-angular-library-implementation' }
            ]
        },
        {
            title: 'One Piece Desk',
            image: '../../../assets/images/one-piece-desk.png',
            approach: Constants.TECHNOLOGY_OPTIONS.FRONTEND,
            technologies: [
                Constants.TECHNOLOGY_TYPE.ANGULAR.value,
                Constants.TECHNOLOGY_TYPE.HTML.value,
                Constants.TECHNOLOGY_TYPE.CSS.value,
                Constants.TECHNOLOGY_TYPE.SCSS.value,
                Constants.TECHNOLOGY_TYPE.TYPESCRIPT.value,
                Constants.TECHNOLOGY_TYPE.APPLICATION.value,
            ],
            description: [
                'This is an Angular Application that shows relevant information about "One Piece" characters and ships.',
                'The authorship of this project belongs mostly to Christopher Ortiz (@christophermontero), my contribution was the refactoring of the code with Lazy Loading to improve the performance of the application.'
            ],
            contributionType: Constants.CONTRIBUTION_OPTIONS.TEAM,
            appLink: 'https://onepiecedesk.netlify.app/pirates',
            repository: [
                { label: 'Github repository', link:'https://github.com/christophermontero/onepiecedesk' },
                { label: 'Code refactoring by me', link:'https://github.com/JorgeChaparroS/onepiecedesk' }
            ]
        },
        {
            title: 'JorgeChaparro`S Cinema',
            image: '../../../assets/images/cinema.png',
            approach: Constants.TECHNOLOGY_OPTIONS.FRONTEND,
            technologies: [
                Constants.TECHNOLOGY_TYPE.ANGULAR.value,
                Constants.TECHNOLOGY_TYPE.HTML.value,
                Constants.TECHNOLOGY_TYPE.CSS.value,
                Constants.TECHNOLOGY_TYPE.SCSS.value,
                Constants.TECHNOLOGY_TYPE.TYPESCRIPT.value,
                Constants.TECHNOLOGY_TYPE.APPLICATION.value,
                Constants.TECHNOLOGY_TYPE.BOOTSTRAP.value,
            ],
            description: [
                'This is an Angular Application that solves a technical requirement that was assigned to me when applying for a position as an Angular Developer.'
            ],
            contributionType: Constants.CONTRIBUTION_OPTIONS.OWN,
            appLink: 'https://jorge-chaparros-cinema.netlify.app',
            repository: [
                { label: 'Github repository', link:'https://github.com/JorgeChaparroS/movies-technical-assignment' }
            ]
        }
    ];
};