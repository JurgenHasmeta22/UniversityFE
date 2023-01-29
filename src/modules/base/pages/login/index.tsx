import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/main/components/button/index";
import Container from "~/main/components/container/index";
import Footer from "~/main/components/footer/index";
import Header from "~/main/components/header/index";
import Input from "~/main/components/input/index";
import Picture from "~/main/components/picture/index";
import authenticationController from "~/main/controllers/authenticationController";
import { useStore } from "~/main/store/zustand/store";
import "~/modules/base/pages/login/style.css";

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useStore();

  // async function onSubmit() {
  //   const response: IResponseLogin = await authenticationController.onLogin(email, password);
  //   localStorage.setItem("token", response.token);
  //   setUser(response.user);
  // }

  if (user) {
    // navigate("/movies");
  }
  
  return (
    <>
      <Header />
      <Container classname="login-page-wrapper">
        <Container classname="left-main-wrapper">
          <Picture
            classname="special-image-1"
            id="login-page-img"
            src="/assets/images/netflix.png"
            alt=""
          />
        </Container>
        <Container classname="right-main-wrapper">
          <form
            id="login-form"
            onSubmit={function (e) {
              e.preventDefault();
              // onSubmit();
            }}
          >
            <h1>MovieLandia22</h1>
            <label>
              <Input
                type="text"
                name="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                required
                onChange={function (e) {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <label>
              <Button>Log In</Button>
            </label>
            <label id="signup-link-wrapper" htmlFor="">
              Don't have an account?
              <Link id="link" to={"/register"}>
                Sign Up
              </Link>
            </label>
          </form>
        </Container>
      </Container>
      <Footer />
    </>
  );
}