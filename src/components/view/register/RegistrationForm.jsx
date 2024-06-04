import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCountries, getStates } from "country-state-picker";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Select Country");
  const [state, setState] = useState("Select State");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isPending, setIsPending] = useState("false");
  const [countriesData, setCountriesData] = useState();
  const [stateData, setStateData] = useState();

  // {"name":"Albania","code":"al","dial_code":"+355"}
  function handleCountryChange(e) {
    const value = e.target.value;
    setCountry(value);

    const selectedCountryCode = countriesData?.find(function (_country) {
      console.log("countryName" + _country.name + " & " + country);
      return _country.name.toLowerCase() == value.toLowerCase();
    })?.code;
    const states = getStates(selectedCountryCode);
    console.log("states " + states);
    console.log("selectedCountryCode " + selectedCountryCode);
  }

  async function getCountriesAndState() {
    const countries = getCountries();
    setCountriesData(countries);
  }

  const _countriesData = useMemo(
    function () {
      return countriesData?.map(function (country) {
        return country.name;
      });
    },
    [countriesData]
  );

  const toastOptions = {
    autoClose: 40000,
    position: "top-center",
    pauseOnHover: true,
  };
  // add the resend link here
  const ResendLink = () => {
    return <Link to="/">Resend</Link>;
  };
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [verify, setVerify] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null);
    // You can perform form validation or any other logic here before submitting
    const rlink = <ResendLink />;
    toast.info(
      <div className="rlink">
        Check email for Verification Link. <span>{rlink}</span>
      </div>,
      toastOptions
    );

    // to add loading message before loading completed

    setIsPending(true);

    // for POST method
    const first_name = firstName;
    const last_name = lastName;
    const nick_name = nickName;
    const password = passwordOne;

    const studentRegData = {
      first_name,
      last_name,
      nick_name,
      email,
      country,
      state,
      password,
      passwordTwo,
    };

    // another way of consuming this api

    // try {
    //   const { response } = await axios.post(
    //     "https://api.technocation.space/apis/auth/register_student.php",
    //     studentRegData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const { data } = response;

    //   setMessage(data.message);
    //   const resendResponse = await axios.post(
    //     "https://api.technocation.space/apis/auth/resend_link.php",
    //     {
    //       email
    //     }
    //   );
    //   console.log("resendResponse" + resendResponse);
    //   navigate("");
    //   // Handle any other logic based on the response here

    //   console.log("data", data);
    // } catch (error) {
    //   setMessage("An error occurred. Please try again.");
    //     console.error('Error:', error);
    // }

    // basic way of consuming the api

    await fetch(
      "https://api.technocation.space/apis/auth/register_student.php",
      {
        method: "POST",
        //   headers:{"Content-Type": "application/json" },
        body: JSON.stringify(studentRegData),
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        setMessage(data.message);
        //  navigate("/dashboard");
        // Handle any other logic based on the response here
      })
      .then(async (data) => {
        const response = await fetch(
          "https://api.technocation.space/apis/auth/resend_link.php",
          {
            method: "POST",
            body: JSON.stringify({ email }),
          }
        );

        console.log("resend response" + response);
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again.");
        console.error("Error:", error);
      });
  };

  useEffect(function () {
    getCountriesAndState();
    console.log("Hello");
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        {/* Registration form */}
        <div id="registration-form" className="registration-form">
          <h2>Registration</h2>

          <form>
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickname">Nick name</label>
              <input
                type="text"
                id="nickname"
                value={nickName}
                name="nickname"
                onChange={(e) => setNickName(e.target.value)}
                placeholder="Nick Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => handleCountryChange(e)}
                required
              >
                {_countriesData?.map(function (countryName, index) {
                  return (
                    <option key={index} value={countryName}>
                      {countryName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">Select State</option>
                <option value="Abia State">Abia State</option>
                <option value="Enugu State">Enugu State</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={passwordOne}
                onChange={(e) => setPasswordOne(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn purple-btn"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p className="login-text">
              already have an account{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>

            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );

  // const RegistrationFormTutor = () => {
  //   return (
  //     <div>
  //       <div className="form-wrapper">
  //             {/* Registration form */}
  //           <form>
  //             <div id="registration-form" className="registration-form">
  //               <h2>Registration</h2>
  //               <div className="form-group">
  //                   <label htmlFor="firstname">First name</label>
  //                   <input type="text" name="firstname" value={name}onChange={(e) => setName(e.target.value)} placeholder="First Name"/>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="lastname">Last name</label>
  //                   <input type="text" name="lastname" placeholder="Last Name"/>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="Email">Email</label>
  //                   <input type="email" name="email" placeholder="Email"/>
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="country">Country</label>
  //                 <select id="country" name="country" onchange="populateStates()">
  //                     <option value="">Select Country</option>
  //                 </select>
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="state">State</label>
  //                 <select id="state" name="state">
  //                     <option value="">Select State</option>
  //                 </select>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="linkedin-url">Linkedin profile url</label>
  //                   <input type="text" name="linkedin-url" placeholder="Input url"/>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="twitter-url">Twitter profile url</label>
  //                   <input type="text" name="twitter-url" placeholder="Input url"/>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="upload-cv">Upload CV</label>
  //                   <input type="file" name="upload-cv" id="" />
  //               </div>

  //               <div className="form-group">
  //                   <label htmlFor="password">Password</label>
  //                   <input type="password" name="password" placeholder="Password"/>
  //               </div>
  //               <div className="form-group">
  //                   <label htmlFor="confirm password">Confirm Password</label>
  //                   <input type="password" name="confirm-password" placeholder="Confirm Password"/>
  //               </div>
  //               <button type="submit" className="btn purple-btn" onClick={handleSubmit}>Register</button>
  //               <p className="login-text">already have an account <Link to = "/login" ><span>Login</span></Link></p>
  //             </div>

  //           </form>
  //         </div>
  //     </div>
  //   );
  // };
};

export default RegistrationForm;
