let projectListCtrl = ($scope, ProjectsService, flash) => { 'ngInject';
  $scope.destroy = (project) => {
    ProjectsService.destroy(project.id).then(
      () => { $scope.projects.splice($scope.projects.indexOf(project), 1) },
      () => { alert("Can't remove this project") }
    )
  }

  $scope.startEditing = (project) => {
    $scope.editedProjectName = project.name
    $scope.editedProject = project
  }

  $scope.edit = (project, new_name) => {
    project.name = new_name
    ProjectsService.edit(project).then(
      () => { $scope.cancelEdit() }, 
      (errors) => { $scope.showErrors(errors) }
    )
  }

  $scope.cancelEdit = () => {
    $scope.editedProjectName = ''
    $scope.editedProject = null    
  }

  $scope.showErrors = (errors) => {
    alert(errors.data.join(', '))
    flash('Errors!') // TODO show errors as flash, add err class to form
  }

  $scope.taskList = []
  $scope.toggleList = (project_id) => {
    if ($scope.taskList[project_id] === undefined) { $scope.taskList[project_id] = false }
    $scope.taskList[project_id] = $scope.taskList[project_id] === false ? true: false
  }

  $scope.getProjects = () =>{
    ProjectsService.get().then(
      (projects) => { $scope.projects = projects.data }
    )
  }

  $scope.create = (text) => {
    ProjectsService.create({ name: text }).then(
      (response) => { $scope.onSuccess(response) }, 
      (errors) => { $scope.onError(errors) }
    )

    $scope.onSuccess = (response) => {
      $scope.projects.push(response.data)
      $scope.showForm = false
      $scope.projectName = ''
    }

    $scope.onError = (errors) => {
      alert(errors.data.name.join(', ')) // TODO 
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
