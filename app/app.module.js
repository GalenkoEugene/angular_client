// require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import configs from './app.configs'
import tokenauth from 'ng-token-auth'
import projects from './projects'
import login from './login'
import cookies from 'angular-cookies'

angular.module('TodoList', [
  uirouter,
  projects,
  login,
  tokenauth,
  cookies
])
.config(routes)
.config(configs)
