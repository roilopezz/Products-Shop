import React, { Component } from "react";
import { toast } from "react-toastify";

export const contextUser = React.createContext();

class UserContext extends Component {
  state = {
    user: [],
    data: [],
  };

  addUser = (email, password) => {
    const { data } = this.state;
    let reEmail = /\S+@\S+\.\S+/;

    if (email && !reEmail.test(email)) {
      return toast.error("Your Email not Valid!");
    }

    if (password.length < 4) {
      return toast.error("Password must be at least 4 characters long");
    }

    let user = localStorage.getItem(email);

    if (user) {
      return toast.error("The user is already registered for the system");
    } else {
      data.push({ password });
      localStorage.setItem(email, JSON.stringify(data));

      toast(`Wellcome ${email} ❤`);

      this.setState({
        user: [
          {
            email: email,
            password: password,
          },
        ],
      });
    }
  };

  checkUser = (email, password) => {
    let localStorageUsers = localStorage.getItem(email);
    let users = JSON.parse(localStorageUsers);

    if (!users) {
      return;
    }

    return users.find((u) => {
      if (u.password.includes(password)) {
        return true;
      }

      return false;
    });
  };

  login = (email, password) => {
    let localStorageUsers = localStorage.getItem(email);
    // let navigate = useNavigate();
    if (typeof localStorageUsers == "null") {
      toast.error("Email or Password is incorrect");
    }

    let user = {
      email: email,
      password: password,
    };

    if (typeof this.checkUser(email, password) == "undefined") {
      toast.error("Email or Password is incorrect");
    } else {
      toast(`Wellcome ${email} ❤`);

      // navigate("/");

      this.setState({
        user: [
          {
            email: email,
            password: password,
          },
        ],
      });
    }
  };

  logout = () => {
    this.setState({
      user: [],
    });
  };

  changePassword = (newPassword) => {
    const { user } = this.state;

    if (newPassword < 4) {
      return toast.error("password must be between 4 characters");
    }

    let editPassword = {
      password: newPassword,
    };

    localStorage.setItem(user[0].email, JSON.stringify([editPassword]));

    this.setState({
      user: [
        {
          email: user[0].email,
          password: editPassword.password,
        },
      ],
    });

    toast.success("password changed successfully");
  };

  render() {
    return (
      <contextUser.Provider
        value={{
          ...this.state,
          addUser: this.addUser,
          login: this.login,
          logout: this.logout,
          changePassword: this.changePassword,
        }}
      >
        {this.props.children}
      </contextUser.Provider>
    );
  }
}

export default UserContext;

// import React, { useState } from "react";
// export const contextUser = React.createContext();
// const UserContext = () => {
//   const [state, setState] = [];

//   return <contextUser.Provider value={state}></contextUser.Provider>;
// };

// export default UserContext;
