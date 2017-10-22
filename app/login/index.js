// login.module.js

import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './login.routes.js'
import LoginCtrl from './login.controller'

export default angular.module('TodoList.login', [uirouter])
  .config(routes)
  .controller('TodoList.login', LoginCtrl)

