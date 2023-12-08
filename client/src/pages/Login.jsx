import { useState } from 'react';

import { loginUser } from '../utils/api';
import Auth from '../utils/auth';

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [loginData, setLoginData]= useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await loginUser(loginData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setLoginData({
      username: '',
      password: ''
    });
  };

    return (
      <section className="mx-4">
        <form onSubmit={handleFormSubmit} className="m-5 align-items-center">
          {showAlert ?
            (<div className="mb-3 w-75 alert alert-danger alert-dismissible" role="alert" >
            Username or password is incorrect. Please try again!
          </div>) :
          (<div></div>)}
          <div className="mb-3 w-75">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" onChange={handleInputChange} value={loginData.username} />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handleInputChange} value={loginData.password} />
          </div>
          <button  type="submit" className="btn btn-warning">Enter</button>
        </form>
      </section>
    );
  };
  
  export default Login;