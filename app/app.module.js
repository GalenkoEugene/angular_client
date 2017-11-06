import './scss/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/npm.js';
import angular from 'angular'
import ipCookie from 'angular-cookie'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import configs from './app.configs'
import tokenauth from 'ng-token-auth'
import ngCookies from 'angular-cookies'
import projects from './projects'
import tasks from './tasks'
import login from './login'
import signup from './signup'
import comments from './comments'
import 'angular-flash/angular-flash.js'
import ngFileUpload from 'ng-file-upload'

angular.module('TodoList', [
  'flash',
  'moment-picker',
  ngFileUpload,
  uirouter,
  projects,
  tasks,
  signup,
  login,
  tokenauth,
  ipCookie,
  ngCookies,
  comments
])
.config(routes)
.config(configs)
