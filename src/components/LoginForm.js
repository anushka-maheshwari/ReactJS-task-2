import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function LoginForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  let navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors=validate(formValues);
    if (Object.keys(errors).length === 0) {
    localStorage.setItem('user',JSON.stringify(formValues))
    navigate('/dashboard');
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      alert("Enter Username");
      errors.username = "Username is required!";
    }
    if (!values.email) {
      alert(" Enter Your Email ")
      errors.email = "Email is required!";
    }else if (!regex.test(values.email)) {
      alert("Enter Valid Email");
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      alert("Enter password");
      errors.password = "Password is required";
    } 
    return errors;
  };

  return (
    <div>
        <div className="grid container ">
        <h1>Login Form</h1>
        </div>
        <div className="container">
        <form>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username"  placeholder="Username" value={formValues.username} onChange={handleChange}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formValues.password}onChange={handleChange}/>
          </div>
        </div>
        </form>
        <div className=" grid container ">
        <button  onClick={handleSubmit} className="fluid ui button blue">Login</button>
      </div>
        
    </div>
    </div>
  );
}

export default LoginForm;