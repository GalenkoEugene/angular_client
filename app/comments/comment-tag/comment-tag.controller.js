export default class CommentTagCtrl {
  constructor($scope, CommentService, Upload, $window) { 'ngInject';
    this.$scope = $scope
    this.CommentService = CommentService
    this.$scope.newComment = {}
    this.Upload = Upload
    this.$scope.comments = []
    this.$window = $window
  }

  getComments() {
    this.CommentService.get(this.task.project_id, this.task.id).then(
      success => { this.$scope.comments = success.data },
      errors => { console.log(errors) }
    )
  }

  storeComment(comment) {
    if(comment.file) {
      this.prepareFile(comment)
    } else {
      this.create(comment.body, null)
    }
  }

  prepareFile(comment) {
    this.Upload.base64DataUrl(comment.file).then(
        base64url => { this.create(comment.body, base64url) },
        errors => { console.log(errors) }
      )
  }

  create(text, base64url) {
    this.CommentService.create(this.task.project_id, this.task.id, {body: text, attachment: base64url}).then(
      success => { this.closeModal(success) },
      errors => { console.log(errors) }
    )
  }

  closeModal() {
    this.$scope.$parent.modalIsOn[this.task.id] = false
  }

  popitup(url, target) {
    this.$window.open(url, target)
  }

  destroy(comment) {
    this.CommentService.destroy(this.task.project_id, this.task.id, comment.id).then(
      success => { this.removeLocaly(comment) },
      errors => { console.log(errors) }
    )
  }

  removeLocaly(comment) {
    this.$scope.comments.splice(this.$scope.comments.indexOf(comment), 1)
  }
}
