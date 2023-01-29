import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/main/components/button/index";
import Container from "~/main/components/container/index";
import Input from "~/main/components/input/index"
import authenticationController from "~/main/controllers/authenticationController";
import { useStore } from "~/main/store/zustand/store";
import "~/modules/base/pages/register/style.css";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useStore();
  
  async function onSubmit() {
    const response: any = await authenticationController.onRegister(name, surname, username, email, phone, password);
    localStorage.setItem("token", response.token);
    setUser(response.user);
  }

  const navigate = useNavigate();

  // if (user) {
  //   navigate("/movies");
  // }

  return (
    <Container classname="signup-page-wrapper">
      <Container classname="main-wrapper">
        <form
          id="signup-form"
          onSubmit={function (e) {
            e.preventDefault();
            onSubmit();
          }}
        >
          <h1>Register</h1>
          <label id="name" htmlFor="">
            <Input 
              type="text"
              placeholder="Name"
              required={true}
              onChange={function (e: any) {
                setName(e.target.value);
              }}
            />
          </label>
          <label id="surname" htmlFor="">
            <Input 
              type="text"
              placeholder="Surname"
              required={true}
              onChange={function (e: any) {
                setSurname(e.target.value);
              }}
            />
          </label>
          <label id="username" htmlFor="">
            <Input 
              type="text"
              placeholder="Username"
              required={true}
              onChange={function (e: any) {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label id="email">
            <Input 
              type="text"
              id="email"
              placeholder="Email"
              onChange={function (e) {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label id="phone" htmlFor="">
            <Input 
              type="text"
              placeholder="Phone"
              required={true}
              onChange={function (e: any) {
                setPhone(e.target.value);
              }}
            />
          </label>
          <label id="password">
            <Input 
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label>
            <Button>Register</Button>
          </label>
          <label id="login-link-wrapper" htmlFor="">
            You have an account?
            <Link id="link" to={"/login"}>
              Login
            </Link>
          </label>
        </form>
      </Container>
    </Container>
  );
}