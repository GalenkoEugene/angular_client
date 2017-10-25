export default function configs($authProvider, $qProvider) { 'ngInject';
  $qProvider.errorOnUnhandledRejections(false);

  $authProvider.configure({
    apiUrl:                  '/api/v1',
    tokenValidationPath:     '/auth/validate_token',
    signOutUrl:              '/auth/sign_out',
    emailRegistrationPath:   '/auth',
    accountUpdatePath:       '/auth',
    accountDeletePath:       '/auth',
    confirmationSuccessUrl:  window.location.href,
    passwordResetPath:       '/auth/password',
    passwordUpdatePath:      '/auth/password',
    passwordResetSuccessUrl: window.location.href,
    emailSignInPath:         '/auth/sign_in',
    storage:                 'cookies',
    forceValidateToken:      false,
    validateOnPageLoad:      true,
    proxyIf:                 function() { return false; },
    proxyUrl:                '/proxy',
    omniauthWindowType: 'sameWindow',
    tokenFormat: {
      "access-token": "{{ token }}",
      "token-type":   "Bearer",
      "client":       "{{ clientId }}",
      "expiry":       "{{ expiry }}",
      "uid":          "{{ uid }}"
    },
    cookieOps: {
      path: "/",
      expires: 9999,
      expirationUnit: 'days',
      secure: false,
      domain: 'localhost'
    },
    createPopup: function(url) {
      return window.open(url, '_blank', 'closebuttoncaption=Cancel');
    },
    parseExpiry: function(headers) {
      return (parseInt(headers['expiry']) * 1000) || null;
    },
    handleLoginResponse: function(response) {
      return response.data;
    },
    handleAccountUpdateResponse: function(response) {
      return response.data;
    },
    handleTokenValidationResponse: function(response) {
      return response.data;
    }
  });
}
