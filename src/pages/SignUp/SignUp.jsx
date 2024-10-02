import React, { useState } from "react";
import style from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
import supabase from "../../supabase.js";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.item}>
          <label for="fullName">Full Name</label>
          <input
            placeholder="Fullname"
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className={style.item}>
          <label for="email">Email</label>
          <input placeholder="Email" name="email" onChange={handleChange} />
        </div>
        <div className={style.item}>
          <label for="password">Password</label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className={style.item}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className={style.btn}>
        <p>Already have an account?</p>
        <NavLink to="/signin">Sign In</NavLink>
      </div>
    </div>
  );
}
