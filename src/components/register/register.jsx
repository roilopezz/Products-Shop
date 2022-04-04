import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { contextUser } from "../../services/userContext";
import { useContext, useState, useEffect } from "react";

const Register = () => {
  const test = useContext(contextUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addUser, user } = test;

  const handleSubmit = (event) => {
    event.preventDefault();

    addUser(email, password);

    event.target.reset();
  };

  // useEffect(() => {
  //   console.log(user.email.length);
  // }, [user]);

  if (user.length) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="titlesPages" style={{ textAlign: "center" }}>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <h1>Register</h1>
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                aria-label="userName"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3" style={{ width: "90%" }}>
              <FormControl
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                type="password"
              />
            </InputGroup>

            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
