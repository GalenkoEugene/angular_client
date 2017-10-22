import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import projects from './projects'

angular.module('TodoList', [uirouter, projects])
  .config(routes)
