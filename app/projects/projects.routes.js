export default function routes($stateProvider) { 'ngInject';
  $stateProvider
  .state('projects', {
    url: '/',
    template: require('./projects.html'),
    resolve: {
      auth: ['$auth', '$state',($auth, $state) => {
        return $auth.validateUser().catch(function(err){
                $state.go('login');
              })
      }]
    }
  });
}
