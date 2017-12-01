// signup.module.js

import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './signup.routes.js'
import SignUpCtrl from './signup.controller'

export default angular.module('TodoList.signup', [uirouter])
  .config(routes)
  .controller('SignUpCtrl', SignUpCtrl)
  .name