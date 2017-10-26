let addProjectCtrl = ($scope, ProjectsService) => { 'ngInject';
  $scope.createProject = (text) => {
    ProjectsService.createProject({ name: text })
  }
}

module.exports = {
  template: require('./add-project.html'),
  controller: addProjectCtrl,
  controllerAs: 'addProjectCtrl',
  bindings: {
    project: '='
  }
}
