import { Button, InputGroup, FormControl } from "react-bootstrap";

// import { toast } from "react-toastify";
import React, { useState, useContext } from "react";
import { contextUser } from "../../services/userContext";
import { Redirect } from "react-router-dom";
const Login = () => {
  const userContext = useContext(contextUser);

  const { login, user } = userContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  if (user.length) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="titlesPages" style={{ textAlign: "center" }}>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <h1>Login</h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputGroup className="mb-3" style={{ width: "90%" }}>
              <FormControl
                placeholder="email"
                aria-label="userName"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ width: "90%" }}>
              <FormControl
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
