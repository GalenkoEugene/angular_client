
export default class LoginCtrl {
  constructor($auth, $cookies, $location, $rootScope, $scope, Flash) { 'ngInject';
    this.$auth = $auth;
    this.$cookies = $cookies;
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$scope.hasError = false
    this.Flash = Flash
    this.call();
  }

  call(){
    this.$rootScope.$on('auth:login-success', (ev, user) => {
      this.$scope.hasError = true
      this.$location.path('/');
      this.Flash.create('success', `Welcome ${user.email}`)
    });

    this.$rootScope.$on('auth:login-error', (ev, reason) => {
      this.$scope.hasError = true
      console.log(`auth failed because ${reason.errors[0]}`);
    });

    this.$rootScope.$on('auth:logout-success', (ev) => {
      this.$location.path('/login');
      this.Flash.create('info', 'Goodbye..')
    });
  }
}
