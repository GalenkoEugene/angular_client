
export default class LoginCtrl {
  constructor($rootScope, $auth, $cookies) {

  }

  checkUser() {
    if (!!$cookies.get('auth_headers')) {
      $location.path('/');
    } else {
      $location.path('/login');
    }
  }
}
