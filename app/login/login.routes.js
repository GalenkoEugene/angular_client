routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('projects', {
    url: '/login',
    template: require('./login.html'),
    controller: 'LoginCtrl',
    controllerAs: 'lc'
  });
}
