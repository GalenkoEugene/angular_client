export default class SignUpCtrl {
  constructor($auth, $cookies, $location, $scope) { 'ngInject';
    this.$cookies = $cookies;
    this.$location = $location;
    this.$scope = $scope;
    this.call();
  }

  call(){
    this.$scope.$on('auth:registration-email-success', (ev, message) => {
      alert("You've successfully registered.")
      this.$location.path('/')
    });

    this.$scope.$on('auth:registration-email-error', (ev, reason) => {
      angular.forEach(reason.errors.full_messages, (value, index) => {
        alert(value)
      })
    });
  }
}
