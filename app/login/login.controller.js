export default class LoginCtrl {
  constructor($auth, $cookies, $location) {

  }

  checkUser() {
    if (!!$cookies.get('auth_headers')) {
      $location.path('/');
    } else {
      $location.path('/login');
    }
  }
}
