import React from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  let user = JSON.parse(localStorage.getItem("data") || []);
  return (
    <div className={styles.container}>
      <div>
        <p>
          Thanks a ton for taking out your precious time and for completing the
          survey Email Address
        </p>
        <h3>
          <span>Email:</span> {user.email}
        </h3>
        <h3>
          {" "}
          <span>Mobile:</span> {user.code + " " + user.mobile}
        </h3>
        <Link to="/">
          <button>
            <i className="fa-solid fa-arrow-left-long"> Back to Us</i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
