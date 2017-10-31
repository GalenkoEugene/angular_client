export default class TaskService {
  
  constructor($http) { 'ngInject';
    this.$http = $http
  }

  get(project_id) {
    return this.$http.get(`/api/v1/projects/${project_id}/tasks`)
  }

  create(project_id, task_params) {
    return this.$http.post(`/api/v1/projects/${project_id}/tasks`, task_params)
  }

  destroy(project_id, task_id) {
    return this.$http.delete(`/api/v1/projects/${project_id}/tasks/${task_id}`)
  }

  edit(project_id, task) {
    return this.$http.put(`/api/v1/projects/${project_id}/tasks/${task.id}`, { task })
  }
}