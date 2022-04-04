import React, { useEffect, useContext } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contextUser } from "../../services/userContext";
const Home = () => {
  const userContext = useContext(contextUser);

  const { user } = userContext;

  // useEffect(() => {
  //   console.log(user);
  // }, []);

  return (
    <div className="titlesPages mt-5" style={{ textAlign: "center" }}>
      <div className="d-flex justify-content-center mt-5">
        {!user.length ? (
          <div>
            <h1>Login or Register</h1>
            <div className="mt-5">
              <Button className="me-2">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
              <Button className="ms-2">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/register"
                >
                  register
                </Link>
              </Button>{" "}
            </div>
          </div>
        ) : (
          user.map((u) => {
            return (
              <div className="mt-5" key={u}>
                <h2>
                  Welcome
                  <Link
                    className="ms-2"
                    style={{ textDecoration: "none" }}
                    to="/profile"
                  >
                    {u.email}
                  </Link>
                </h2>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
