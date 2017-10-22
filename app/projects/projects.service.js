export default class ProjectsService {
  constructor($http) {
    this.$http = $http
  }

  getProjects() {
    return this.$http.get('/api/v1/projects')
  }
}
