export default class TaskListCtrl {
  constructor($scope, TaskService) { 'ngInject';
    this.$scope = $scope
    this.$scope.project = $scope.$parent.project
    this.TaskService = TaskService
  }

  getTasks(){
    this.TaskService.get(this.$scope.project.id).then(
      (response) => { this.$scope.tasks = response.data },
      (errors) => { alert(errors) } 
    )
  }
}