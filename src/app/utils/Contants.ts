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
};