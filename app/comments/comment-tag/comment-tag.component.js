import CommentTagCtrl from './comment-tag.controller.js' 

module.exports = {
  template: require('./comment-tag.html'),
  controller: CommentTagCtrl,
  controllerAs: 'vm',
  bindings: {
    task: '=',
    modalIsOn: '='
  }
}