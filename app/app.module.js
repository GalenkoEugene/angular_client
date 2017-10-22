import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import projects from './projects'
import login from './login'
import configs from './app.configs'
import tokenauth from 'ng-token-auth'
import cookie from 'angular-cookie'

angular.module('TodoList', [uirouter, projects, tokenauth, login])
  .config(routes, configs)
