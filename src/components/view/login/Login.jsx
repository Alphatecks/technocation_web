import React, {useState} from 'react'
import "./login.css"
import { BoxLayout } from "../../../containers";
import progress from "../../../assets/images/Progress.svg";

import { Link, useNavigate } from "react-router-dom";



const Login = () => {

  // const [activeTab, setActiveTab] = useState('register');

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };

   const dynamicStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const LoginForm = () => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      setError(null)





    }
    // for post
      
    const studentLoginData = { email, password };


    fetch('https://api.technocation.space/apis/auth/register_student.php', {
      method:'POST',
  //   headers:{"Content-Type": "application/json" },
      body: JSON.stringify(studentLoginData)
    }) 
    .then((response) => response.json())
    .then((data) => {
      setMessage(data.message);
      navigate("/dashboard");
      // Handle any other logic based on the response here
    })
    .catch((error) => {
      setMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    });

    return (
      <div>
        <div className="form-wrapper">
          {/* login form */}
          <form action="">
            <div id="login-form" class="login-form">
              <h2>Login</h2>
              <div/>
              <div class="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input type="email" name="email" placeholder="Email" value={email} />
              </div>
              <div class="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" name="password" placeholder="Password" value={password } />
              </div>
              <Link to="/dashboard"><button type="submit" className="btn purple-btn" onClick={handleLoginSubmit} >Login</button></Link>
              <p className="login-text">don't have an account ? <Link to = "/register" ><span>Register</span></Link></p>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // const LoginFormTutor = () => {
  //   return (
  //     <div>
  //       <div className="form-wrapper">
  //         {/* login form */}
  //         <form action="">
  //           <div id="login-form" class="login-form">
  //             <h2>Login</h2>
  //             <div/>
  //             <div class="form-group">
  //                 <label htmlFor="login-email">Email</label>
  //                 <input type="email" name="login-email" placeholder="Email" />
  //             </div>
  //             <div class="form-group">
  //                 <label htmlFor="login-password">Password</label>
  //                 <input type="password" name="login-password" placeholder="Password" />
  //             </div>
  //             <button type="submit" className="btn purple-btn">Login</button>
  //             <p className="login-text">don't have an account ? <Link to = "/register" ><span>Register</span></Link></p>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };


  return (
    <div className="reg-container">
      <div className="reg-container_wrapper">
        <BoxLayout 
          style={dynamicStyles}
          bgImage= {<img src={progress} alt="Bg-img" />}
          >
          <div className="register-form-container">
            {/* <div class="btn-container">
              <button
                className={`btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => handleTabChange('register')}>
                User
              </button>

              <button
                className={`btn ${activeTab === 'tutor' ? 'active' : ''}`}
                onClick={() => handleTabChange('tutor')}>
                 Tutor
              </button>
            </div> */}
            
            {/* {activeTab === 'register' && <LoginForm />}
            {activeTab === 'tutor' && <LoginFormTutor />} */}
            
            <LoginForm />
            


            
          </div>
          

        

        </BoxLayout>
      </div>
    </div>
  );
}

export default Login