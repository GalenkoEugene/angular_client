// project.module.js

import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './projects.routes.js'
import projectList from './project-list/project-list.component'
import ProjectsService from './projects.service'

export default angular.module('TodoList.projects', [uirouter])
  .config(routes)
  .component('projectList', projectList)
  .service('ProjectsService', ProjectsService)
  .name
