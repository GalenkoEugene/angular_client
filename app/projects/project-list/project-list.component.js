function projectListCtrl() {
}

module.exports = {
  template: require('./project-list.html'),
  controller: projectListCtrl,
  bindings: {
    projects: '='
  }
}
