let addProjectCtrl = ($scope, ProjectsService) => { 'ngInject';
  $scope.create = (text) => {
    ProjectsService.create({ name: text })
    $scope.projectName = '' // TODO -> clear on success
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
