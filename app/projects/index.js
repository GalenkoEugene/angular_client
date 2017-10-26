// project.module.js

import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './projects.routes.js'
import projectList from './project-list/project-list.component'
import addProject from './add-project/add-project.component'
import ProjectsService from './projects.service'

export default angular.module('TodoList.projects', [uirouter])
  .config(routes)
  .component('projectList', projectList)
  .component('addProject', addProject)
  .service('ProjectsService', ProjectsService)
  .name
