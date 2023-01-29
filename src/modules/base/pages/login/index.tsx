import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/main/components/button/index";
import Container from "~/main/components/container/index";
import Input from "~/main/components/input/index";
import authenticationController from "~/main/controllers/authenticationController";
import { useStore } from "~/main/store/zustand/store";
import "~/modules/base/pages/login/style.css";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useStore();

  async function onSubmit() {
    const response: any = await authenticationController.onLogin(email, password);
    localStorage.setItem("token", response.token);
    setUser(response.user);
  }

  // if (user) {
  //   navigate("/movies");
  // }
  
  return (
    <Container classname="login-page-wrapper">
      <Container classname="main-wrapper">
        <form
          id="login-form"
          onSubmit={function (e) {
            e.preventDefault();
            onSubmit();
          }}
        >
          <h1>Login</h1>
          <label>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={function (e) {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label>
            <Button>Login</Button>
          </label>
          <label id="signup-link-wrapper" htmlFor="">
            Don't have an account?
            <Link id="link" to={"/register"}>
              Register
            </Link>
          </label>
        </form>
      </Container>
    </Container>
  );
}