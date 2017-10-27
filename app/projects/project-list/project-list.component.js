let projectListCtrl = ($scope, ProjectsService) => { 'ngInject';
  $scope.destroy = (project) => {
    ProjectsService.destroy(project.id)
  }

  $scope.startEditing = (project) => {
    $scope.editedProjectName = project.name
    $scope.editedProject = project
  }

  $scope.edit = (project, new_name) => {
    project.name = new_name
    ProjectsService.edit({ project })
    $scope.cancelEdit() // TODO on success
  }

  $scope.cancelEdit = () => {
    $scope.editedProjectName = ''
    $scope.editedProject = null    
  }

  $scope.taskList = true;
  $scope.toggleList = () => {
    $scope.taskList = $scope.taskList === false ? true: false;
  }
}
  
module.exports = {
  template: require('./project-list.html'),
  controller: projectListCtrl,
  controllerAs: 'projectListCtrl',
  bindings: {
    projects: '='
  }
}
