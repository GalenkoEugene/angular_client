// comments.module.js

import angular from 'angular'
import CommentService from './comment.service'
import commentTag from './comment-tag/comment-tag.component'

export default angular.module('TodoList.comments', [])
  .service('CommentService', CommentService)
  .component('commentTag', commentTag)
  .name
