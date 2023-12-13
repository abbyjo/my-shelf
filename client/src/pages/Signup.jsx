import { useState } from 'react';

import { createReader } from '../utils/api';
import Auth from '../utils/auth';

import '../styles/SignUp.css';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', icon:'/assets/icons/icon-1.png' });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createReader(userFormData);

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
    let iconSelect = '';
    setUserFormData({
      username: '',
      email: '',
      password: '',
      icon:''
    });
  };

  return (
    <main>
      <section className="mx-4">
        <form className="m-5" onSubmit={handleFormSubmit}>
        {showAlert ?
            (<div className="mb-3 w-75 alert alert-danger alert-dismissible" role="alert" >
              Something went wrong with your signup. Try again?
            </div>) :
        (<div></div>)}
          <div className="mb-3 w-75">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control"
              name="email" 
              id="email" 
              aria-describedby="email"
              onChange={handleInputChange}
              value={userFormData.email} 
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="username"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="username"
              onChange={handleInputChange}
              value={userFormData.username} 
            />
          </div>
          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
            />
          </div>
          <div className="my-5">
            <div className="form-check form-check-inline">
              <input 
                defaultChecked 
                className="form-check-input" 
                type="radio" 
                name="icon" 
                id="icon-1"
                value="/assets/icons/icon-1.png"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="icon-1"><img className="reader-icon" src="/assets/icons/icon-1.png" /></label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="icon" 
                id="icon-2" 
                value="/assets/icons/icon-2.png"
                onChange={handleInputChange} 
              />
              <label className="form-check-label" htmlFor="icon-2"><img className="reader-icon" src="/assets/icons/icon-2.png" /></label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="icon" 
                id="icon-3" 
                value="/assets/icons/icon-3.png"
                onChange={handleInputChange} 
              />
              <label className="form-check-label" htmlFor="icon-3"><img className="reader-icon" src="/assets/icons/icon-3.png" /></label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="icon" 
                id="icon-4" 
                value="/assets/icons/icon-4.png"
                onChange={handleInputChange} 
              />
              <label className="form-check-label" htmlFor="icon-4"><img className="reader-icon" src="/assets/icons/icon-4.png" /></label>
            </div>
          </div>
          <div className="col my-3">
            <button type="submit" className="btn btn-warning">Sign-up</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;