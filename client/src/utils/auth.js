import decode from 'jwt-decode';

class AuthService {
  // Function to get user data 
  getProfile() {
    return decode(this.getToken());
  };

  // Function to check if user's logged in (Checks if there is a saved token and it's still valid)
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here (?????????)
  };

  // Checks if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  };

 // Retrieves the user token from localStorage
  getToken() { 
    return localStorage.getItem('id_token');
  };

// Saves user token to localStorage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  };

// Clear user token and profile data from localStorage
  logout() {
    
    localStorage.removeItem('id_token');
    window.location.assign('/');// this will reload the page and reset the state of the application
  }
};

export default new AuthService();