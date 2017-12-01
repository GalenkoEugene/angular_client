export default class TaskService {
  constructor($http) { 'ngInject';
    this.$http = $http
  }

  get(project_id) {
    return this.$http.get(`${process.env.API_URL}/api/v1/projects/${project_id}/tasks`)
  }

  create(project_id, task_name) {
    return this.$http.post(`${process.env.API_URL}/api/v1/projects/${project_id}/tasks`, { project_id: project_id, name: task_name })
  }

  destroy(project_id, task_id) {
    return this.$http.delete(`${process.env.API_URL}/api/v1/projects/${project_id}/tasks/${task_id}`)
  }

  update(project_id, task_params) {
    return this.$http.put(`${process.env.API_URL}/api/v1/projects/${project_id}/tasks/${task_params.id}`, task_params)
  }
}
