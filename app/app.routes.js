routes.$inject = ['$urlRouterProvider'];

export default function routes($urlRouterProvider) { 'ngInject';
  $urlRouterProvider.otherwise('/login');
}
