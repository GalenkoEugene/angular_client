export default class CommentService {
  
  constructor($http) { 'ngInject';
    this.$http = $http
  }

  get(project_id, task_id) {
    return this.$http.get(`/api/v1/projects/${project_id}/tasks/${task_id}/comments`)
  }

  create(project_id, task_id, comment_params) {
    return this.$http.post(`/api/v1/projects/${project_id}/tasks/${task_id}/comments`, comment_params)
  }

  destroy(project_id, task_id, comment_id) {
    return this.$http.delete(`/api/v1/projects/${project_id}/tasks/${task_id}/comments/${comment_id}`)
  }
}