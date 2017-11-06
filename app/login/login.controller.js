
export default class LoginCtrl {
  constructor($auth, $cookies, $location, $rootScope, $scope) { 'ngInject';
    this.$auth = $auth;
    this.$cookies = $cookies;
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.call();
  }

  call(){
    this.$rootScope.$on('auth:login-success', (ev, user) => {
      alert(`Welcome ${user.email}`);
      this.$location.path('/');
    });

    this.$rootScope.$on('auth:login-error', (ev, reason) => {
      alert(`auth failed because ${reason.errors[0]}`);
    });
  }
}
