let projectListCtrl = ($scope, ProjectsService, Flash, $window) => { 'ngInject';
  $scope.destroy = (project) => {
    console.log('try to destroy')
    ProjectsService.destroy(project.id).then(
      () => { $scope.projects.splice($scope.projects.indexOf(project), 1) },
      () => { Flash.create('danger', `Can't remove this project the reason is: ${errors.data.name.join(', ')}`) }
    )
  }

  $scope.confirmDestroy = (project) => {
    if ($window.confirm(`Are you sure you want to delete "${project.name}"?`)) {
      $scope.destroy(project)
    }
  }

  $scope.startEditing = (project) => {
    $scope.editedProjectName = project.name
    $scope.editedProject = project
  }

  $scope.edit = (project, new_name) => {
    project.name = new_name
    ProjectsService.edit(project).then(
      () => { $scope.cancelEdit() }, 
      (errors) => { Flash.create('danger', errors.data.name.join(', ')) }
    )
  }

  $scope.cancelEdit = () => {
    $scope.editedProjectName = ''
    $scope.editedProject = null    
  }

  $scope.taskList = []
  $scope.toggleList = (project_id) => {
    $scope.taskList[project_id] = !$scope.taskList[project_id]
  }

  $scope.getProjects = () =>{
    ProjectsService.get().then(
      (projects) => { $scope.projects = projects.data }
    )
  }

  $scope.create = (text) => {
    ProjectsService.create({ name: text || '' }).then(
      (response) => { $scope.onSuccess(response) }, 
      (errors) => { Flash.create('danger', errors.data.name.join(', ')) }
    )

    $scope.onSuccess = (response) => {
      $scope.projects.push(response.data)
      $scope.showForm = false
      $scope.projectName = ''
    }
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
