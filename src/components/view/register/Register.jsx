import React from "react";
import "./register.css";
import { BoxLayout } from "../../../containers";
import learn from "../../../assets/images/learn.jpg";
import RegistrationForm from "./RegistrationForm";






const Register = () => {

 

// to handle movement of tab from tutor to user 
  // const [activeTab, setActiveTab] = useState('register');

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };



   

  // const LoginForm = () => {
  //   return (
  //     <div>
  //       <div className="form-wrapper">
  //         {/* login form */}
  //         <form action="">
  //           <div id="login-form" class="login-form">
  //             <h2>Login</h2>
  //             <div/>
  //             <div className="form-group">
  //                 <label htmlFor="login-email">Email</label>
  //                 <input type="email" name="login-email" placeholder="Email" />
  //             </div>
  //             <div className="form-group">
  //                 <label htmlFor="login-password">Password</label>
  //                 <input type="password" name="login-password" placeholder="Password" />
  //             </div>
  //             <button type="submit" className="btn purple-btn">Login</button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };
  

  const dynamicStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'-70px',
   }; 

    const putBoxStyle ={
     marginTop: "-180px"
    }


  return (
    <div className="reg-container">
      <div className="reg-container_wrapper">
        <BoxLayout 
          title="Join us now"
          style={dynamicStyles} 
          boxStyle={putBoxStyle}
          bgImage= {<img src={learn} alt="Bg-img" />}
          >
          <div className="register-form-container">
            {/* <div className="btn-container">
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
            
            {/* {activeTab === 'register' && <RegistrationForm />} */}
            {/* {activeTab === 'tutor' && <RegistrationFormTutor />} */}
            

            <RegistrationForm />

            


            
          </div>
          

        </BoxLayout>
      </div>
    </div>
  );
};


export default Register;
