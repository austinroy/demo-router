import history from './History';
import auth0 from'auth0-js';

export default class Auth {

    constructor() {
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.getProfile = this.getProfile.bind(this);
    }

    auth0 = new auth0.WebAuth({
        domain: 'austinroy.auth0.com',
        clientID: 'pnjTihowKQvoC8yZJVeSdDGldARxAgrk',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://austinroy.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      });
    
      login() {
        this.auth0.authorize();
      }
  
    handleAuthentication() {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          history.replace('/authed');
          window.location.reload();
        } else if (err) {
          history.replace('/');
          window.location.reload();
          console.log(err);
        }
      });
    }
  
    setSession(authResult) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      history.replace('/feed');
    }
  
    logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      history.replace('/feed');
      window.location.reload();
    }
  
    isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
            this.userProfile = profile;
          }
          cb(err, profile);
        });
    }


  }

