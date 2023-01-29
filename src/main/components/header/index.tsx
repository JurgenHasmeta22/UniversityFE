import { useState } from "react";
import { Link, useNavigate, NavLink, useLocation} from "react-router-dom";
import { useStore } from "~/main/store/zustand/store";
import "react-dropdown/style.css";
import "./style.css";
import Picture from "~/main/components/picture/index";
import Label from "~/main/components/label/index";
import Container from "~/main/components/container/index";
import ListItem from "~/main/components/list/listItem/index";
import List from "~/main/components/list/index";
import Button from "~/main/components/button/index";
import Input from "~/main/components/input/index";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useStore();

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  return (
    <header className="header">
      <Container classname="header-group-1">
        <Link to="/">University Management System</Link>
        <List classname="list-nav">
          <Container classname="div-inside-li">
            <Picture src="/assets/logos/ico_filma_blu.png" alt="" />
            <NavLink to="/" className="special-uppercase">
              Courses
            </NavLink>
          </Container>
        </List>
      </Container>
      <Container classname="header-group-2">
        <form
          className="button-search"
          onSubmit={function (e) {
            e.preventDefault();
          }}
        >
          <Input
            type="search"
            name="searchMovie"
            placeholder="Search for movies..."
            ariaLabel="Search through site content"
            onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
              if (e.target.value.length > 0) {
                // setSearchTerm(e.target.value);
                // if (location.pathname !== '/movies') navigate(`/movies?search=${searchTerm}`)
              } else {
                // setSearchTerm(e.target.value);
                if (location.pathname !== '/movies') navigate(`/movies`)
              }
            }}
          />
          <Button type="submit">
            <i className="fa fa-search"></i>
          </Button>
        </form>
        {!user ? (
          <Button
            classname="button-login-header"
            onClick={function () {
              navigate("/login");
            }}
          >
            <i className="material-icons special-icon">account_circle</i>
            Sign In
          </Button>
        ) : (
          <Container classname="dropdown">
            <ListItem
              classname="dropbtn"
              onClick={function () {
                // redirectToProfile(user);
              }}
            >
              <Picture src={`/assets/avatars/blankavatar.jpg`} />
              {user.username}
            </ListItem>
            <Container classname="dropdown-content">
              <Button
                classname="log-out"
                onClick={function (e: any) {
                  e.stopPropagation();
                  handleLogout();
                }}
              >
                <Label>Log Out</Label>
              </Button>
            </Container>
          </Container>
        )}
      </Container>
    </header>
  );
}
