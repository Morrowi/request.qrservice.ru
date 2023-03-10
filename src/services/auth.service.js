import axios from 'axios';

const API_URL = 'http://rurequest.qrservice.ru/post.php';

class AuthService {
  login(user) {
      console.log('user',user);
    return axios
      .post(API_URL, {
        url: 'auth',
        email: user.email,
        pin: user.pin
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}

export default new AuthService();
