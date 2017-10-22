function projectListCtrl() {
}

module.exports = {
  template: require('./project-list.html'),
  controller: projectListCtrl,
  controllerAs: 'projectListCtrl',
  bindings: {
    projects: '='
  }
}
