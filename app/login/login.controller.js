import angular from 'angular'

export default class LoginCtrl {
  constructor($auth, $cookies, $location) {
    this.checkUser();
  }

  checkUser() {
    // if (!!$cookies.get('auth_headers')) {
    //   $location.path('/');
    // } else {
    //   $location.path('/login');
    // }
  }
}
