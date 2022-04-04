import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { contextUser } from "../../services/userContext";

const Profile = () => {
  const userContext = useContext(contextUser);
  const { user, changePassword } = userContext;
  const [newPass, setNewPass] = useState("");

  function changePass(e) {
    e.preventDefault();
    changePassword(newPass);
    e.target.reset();
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {user.map((u) => {
        return (
          <div
            key={u}
            style={{
              marginTop: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
            }}
          >
            <h1>
              <i className="bi bi-person-circle" /> Profile
            </h1>
            <br />
            <div>
              <b>Email:</b> {u.email}
            </div>
            <div>
              <b>Password:</b> {u.password}
            </div>

            <form onSubmit={(e) => changePass(e)}>
              <InputGroup className="mt-5" style={{ width: "90%" }}>
                <FormControl
                  placeholder="new password"
                  aria-label="new password"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setNewPass(e.target.value)}
                />
                <Button type="submit">Submit</Button>
              </InputGroup>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
