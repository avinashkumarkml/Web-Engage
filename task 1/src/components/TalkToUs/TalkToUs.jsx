import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TalkToUs.module.css";
import { v4 as uuid } from "uuid";
const TalkToUs = () => {
  const [countryCode, setCountryCode] = useState([
    {
      logo: "💶",
      code: "+ 91",
    },
    {
      logo: "💶",
      code: "+ 95",
    },
    {
      logo: "💶",
      code: "+ 89",
    },
    {
      logo: "💶",
      code: "+ 88",
    },
    {
      logo: "💶",
      code: "+ 90",
    },
    {
      logo: "💶",
      code: "+ 95",
    },
    {
      logo: "💶",
      code: "+ 89",
    },
    {
      logo: "💶",
      code: "+ 88",
    },
  ]);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    mobile: "",
    code:"+ 91"
  });

  // TAKING INPUT FORM INPUT FIELDS
  const handleInput = (e) => {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  // FORM SUBMIT`
  const handleSubmit = () => {

    if (data.email === "") {
      if (data.mobile === "") {
        setMobileError(true);
      }
      setEmailError(true);
    } else if (data.mobile === ""){
      if (data.email === "") {
        setEmailError(true);
      }
      setMobileError(true);
    }else if(data.mobile.length<10){
      alert("Invalid email or mobile Number")
    }else if(!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      alert("Invalid Email or Mobile Number")
    }
     else if (emailError === false && mobileError === false) {
      localStorage.setItem("data", JSON.stringify(data));
      navigate("/thankyou");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src="./images/webengage.png" alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.logo_holder}>
          <img
            src="https://webengage.com/wp-content/uploads/2019/04/WebEngage-logo-1.png"
            alt=""
          />
          <h1>Get a FREE</h1>
          <h4>consultantion with and expert</h4>
        </div>
        <div className={styles.form__container}>
          {/* ------------------EMAIL-------------- */}
          <div styles={styles.email}>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                if (
                  e.target.value.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  )
                ) {
                  setEmailError(false);
                  

                } else {
                  setEmailError(true);
                }
                handleInput(e);
              }}
              placeholder="Enter Your Email Address"
            />
            {/* ------------ERROR MESSAGE------------- */}
            {emailError && <span className={styles.error}>Required Field</span>}
          </div>

          {/* ---------------MOBILE---------------- */}
          <div style={styles.mobile}>
            <select name="" id="" onChange={(e)=>setData({...data,code:e.target.value})}>
              {countryCode.map((item) => (
                <option key={uuid()} value={item.code}>
                  {item.code + " " + item.logo}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="mobile"
              maxLength={10}
              onChange={(e) => {
                if (e.target.value.length !== 10) {
                  setMobileError(true);
                } else {
                  setMobileError(false);
                }
                handleInput(e);
              }}
              placeholder=" Enter Your Mobile Number"
            />
            {/* ----------ERROR MESSAGE---------- */}
            {mobileError && (
              <span className={styles.error}>Required Field</span>
            )}
          </div>
          <button onClick={handleSubmit}>
            TALK TO US <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
