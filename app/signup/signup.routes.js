export default function routes($stateProvider) { 'ngInject';
  $stateProvider
  .state('signup', {
    url: '/signup',
    template: require('./signup.html'),
    controller: 'SignUpCtrl',
    controllerAs: 'signup'
  });
}