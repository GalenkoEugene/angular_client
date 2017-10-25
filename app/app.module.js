import './scss/base.scss';
import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import ipCookie from 'angular-cookie'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import configs from './app.configs'
import tokenauth from 'ng-token-auth'
import ngCookies from 'angular-cookies'
import projects from './projects'
import login from './login'
import signup from './signup'

angular.module('TodoList', [
  uirouter,
  projects,
  signup,
  login,
  tokenauth,
  ipCookie,
  ngCookies
])
.config(routes)
.config(configs)
