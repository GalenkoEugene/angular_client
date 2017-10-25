export default function routes($stateProvider) { 'ngInject';
  $stateProvider
  .state('login', {
    url: '/login',
    template: require('./login.html'),
    controller: 'LoginCtrl',
    controllerAs: 'login'
  });
}
