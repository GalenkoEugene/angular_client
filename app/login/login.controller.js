// import ProjectsService from '../projects/projects.service'

export default class LoginCtrl {
  constructor($auth, $cookies, $location, $rootScope) { 'ngInject';
    this.$auth = $auth;
    this.$cookies = $cookies;
    this.$location = $location;
    this.$rootScope = $rootScope;
    // this.redirectUser();
    this.check();
  }

  check($location){
    this.$rootScope.$on('auth:login-success', function(ev, user) {
      // ProjectsService.getProjects();
      console.log(user.email);
      // debugger;
      // this.$location.path('/');
    });

  }

  // redirectUser() {
  //   if (!!this.$cookies.get('auth_headers')) {
  //     this.$location.path('/');
  //   } else {
  //     this.$location.path('/signup');
  //   }
  // }
}
