export default function routes($stateProvider) { 'ngInject';
  $stateProvider
  .state('projects', {
    url: '/',
    template: require('./projects.html'),
    resolve: {
      auth: ['$auth',($auth) => { 
        return $auth.validateUser()
      }]
    }
  });
}
