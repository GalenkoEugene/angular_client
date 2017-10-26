export default class ProjectsService {
  constructor($http) { 'ngInject';
    this.$http = $http
  }

  getProjects() {
    return this.$http.get('/api/v1/projects')
  }

  createProject(project_params) {
    this.$http.post('/api/v1/projects', project_params)
    console.log(project_params)
  }
}
