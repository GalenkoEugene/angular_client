// tasks.module.js

import angular from 'angular'
import uirouter from 'angular-ui-router'
import TaskService from './task.service'
import taskList from './task-list/task-list.component'

export default angular.module('TodoList.tasks', [uirouter])
  .service('TaskService', TaskService)
  .component('taskList', taskList)
  .name
