import React, { useContext, useState } from "react";
import style from "./SignIn.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase.js";
import { UserContext } from "../ContextAPIs/authUserContext.js";
export default function SignIn() {
  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        email: e.target.value,
        password: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/homepage");
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
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
        <p>Don't you have an account?</p>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}
