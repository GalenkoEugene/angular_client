export default class SignUpCtrl {
  constructor($auth, $cookies, $location, $scope, Flash) { 'ngInject';
    this.$cookies = $cookies
    this.$location = $location
    this.$scope = $scope
    this.Flash = Flash
    this.$scope.hasError = false
    this.call();
  }

  call(){ 
    this.$scope.$on('auth:registration-email-success', (ev, message) => {
      this.$scope.hasError = false
      this.$location.path('/')
      this.Flash.create('success', 'You’re successfully registered!')
    });

    this.$scope.$on('auth:registration-email-error', (ev, reason) => {
      this.$scope.hasError = true
      angular.forEach(reason.errors.full_messages, (value, index) => {
        this.Flash.create('danger', value)
      })
    });
  }
}
