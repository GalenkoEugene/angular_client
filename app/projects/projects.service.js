export default class ProjectsService {
  constructor($http) { 'ngInject';
    this.$http = $http
  }

  get() {
    return this.$http.get(`${process.env.API_URL}/api/v1/projects`)
  }

  create(project_params) {
    return this.$http.post(`${process.env.API_URL}/api/v1/projects`, project_params)
  }

  destroy(project_id) {
    return this.$http.delete(`${process.env.API_URL}/api/v1/projects/${project_id}`)
  }

  edit(project) {
    return this.$http.put(`${process.env.API_URL}/api/v1/projects/${project.id}`, { project })
  }
}
