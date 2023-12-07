import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';  // Corrected import
import Config from "../config";

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(Config.api + '/apiUser/Login', { usr: userName, pwd: password });
      if (response.data.message === 'success') {
        localStorage.setItem('token', response.data.token);
        // Redirect to a different page after successful login
        navigate('/Home');  // Replace '/dashboard' with your desired route
      }
    } catch (error) {
      Swal.fire({
        title: 'รหัสผ่านไม่ถูกต้อง',
        icon: 'error'
      });
    }
  }

  return (
    <>
        <div class="login-box container mt-5" >
          <div class="login-logo ">
            <b>YaSuuu</b>Program Test
          </div>
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in to start </p>

              <form onSubmit={handleLogin}>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} class="form-control" placeholder="User"
                  />

                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fa fa-user-circle"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">

                  </div>
                  <div class="col-4">
                    <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block">Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
} export default Login;