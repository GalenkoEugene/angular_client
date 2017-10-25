export default class SignUpCtrl {
  constructor($auth, $cookies, $location) { 'ngInject';
    this.$cookies = $cookies;
    this.$location = $location;
    // this.redirectUser();
  }

  // TODO on events

  redirectUser() {
    if (!!this.$cookies.get('auth_headers')) {
      this.$location.path('/');
    } else {
      this.$location.path('/login');
    }
  }
}
