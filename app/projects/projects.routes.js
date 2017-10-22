routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('projects', {
    url: '/',
    template: require('./projects.html'),
    resolve: {
      projects: ['ProjectsService', (ProjectsService) => {
        return ProjectsService.getProjects()
      }]
    }
  });
}
