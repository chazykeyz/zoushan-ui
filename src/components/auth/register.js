import React, { useState } from "react";
// semantic ui
import { Button, Label, Form, Grid, Segment, Icon } from "semantic-ui-react";

// material ui
import { Hidden } from "@material-ui/core";

// react router dom
import { NavLink, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

// REDUX
import { connect } from "react-redux";
import { Registration } from "../../reduxStore/actions/auth";

// data import
import axios from "axios";
import { userAllAPI } from "../../constant";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright() {
  return (
    <p className="secondary">
      {"Zoushan Cosmetics Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}
const Register = ({ Registration, is_authenticated, setRedirect, setOpenRegister }) => {
  // HOOKS
  // conditional hooks
  const [emptyIgnore, setEmptyIgnore] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  //   data
  const [users, setUsers] = React.useState([]);

  // input
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");

  // validation setSpaceCheck
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [rePasswordValidate, setRePasswordValidate] = useState(true);
  const [matchValidate, setMatchValidate] = useState(true);
  const [userCheck, setUserCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [spaceCheck, setSpaceCheck] = useState(false);

  //   useeffect
  React.useEffect(() => {
    const dataFetch = async () => {
      await axios.get(userAllAPI).then((res) => {
        setUsers(res.data);
      });
    };
    dataFetch();
  }, []);

  // on submit
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // search for empty input
    if (username === "" || password === "") {
      setEmptyIgnore(true);
      setLoading(false);
    }

    // user checking
    if (users.filter((item) => item.brandName.username === username)) {
      setUserCheck(true);
    }

    // email checking
    if (users.filter((item) => item.brandName.email === email)) {
      setEmailCheck(true);
    }

    Registration(email, username, password, re_password).then(() => {
      setLoading(false);
    });
  };

  if (is_authenticated) {
    return <Redirect to="/checkout" />;
  }
  return (
    <div
      className="col-12 d-flex align-items-starts justify-content-center"
      style={{
        height: "100vh",
        paddingTop: 100,
      }}
    >
      <div className="col-md-3 col-lg-3 pt-5 ">
      <div className="flex justify-between">
        <h3>Sign Up </h3>
<div onClick={()=>{
              setOpenRegister(false)
          
          }} className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center bg-white text-black">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
      </div>
      
        {/* form Contianer */}
        <Segment
          style={{
            borderRadius: 20,
            background: "white",
            border: "none",
          }}
        >
          <Grid columns={1} stretched>
            <Grid.Column>
              <Form className=" text-left col-12" onSubmit={handleSubmit}>
                {/* brand name input */}
                <Form.Field>
                  {/* warning label */}
                  {emptyIgnore && (
                    <Label basic color="red" pointing="below">
                      Please enter a Username
                    </Label>
                  )}
                  {userCheck && (
                    <Label basic color="red" pointing="below">
                      Username Alread taken!
                    </Label>
                  )}
                  {spaceCheck && (
                    <Label basic color="red" pointing="below">
                      Username shouldn't contain space!
                    </Label>
                  )}
                  {/* /warning label */}
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    value={username}
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (e.target.value.match(" ")) {
                        setSpaceCheck(true);
                      } else {
                        setSpaceCheck(false);
                      }
                    }}
                    placeholder="username"
                  />
                </Form.Field>
                {/* brand name input */}

                {/* /Email input */}
                <Form.Field>
                  {/* warning label */}
                  {emptyIgnore && (
                    <Label basic color="red" pointing="below">
                      Please enter a Email!
                    </Label>
                  )}

                  {emailCheck && (
                    <Label basic color="red" pointing="below">
                      Email Alread taken!
                    </Label>
                  )}
                  {/* /warning label */}
                  <Form.Input
                    icon="mail"
                    iconPosition="left"
                    label="Email"
                    type="email"
                     required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                </Form.Field>
                {/* /Email input */}

                {/* password input */}
                <Form.Field>
                  {/* warning label */}
                  {emptyIgnore && (
                    <Label basic color="red" pointing="below">
                      Please enter a password
                    </Label>
                  )}
                  {/* /warning label */}
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                     required
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (e.target.value.length >= 8) {
                        setPasswordValidate(false);
                      } else {
                        setPasswordValidate(true);
                      }
                    }}
                  />
                  {password !== "" && (
                    <div className="d-flex flex-column align-items-start">
                      <i
                        className={
                          passwordValidate ? "text-danger" : "text-success"
                        }
                      >
                        Atleast 8 characters
                      </i>
                    </div>
                  )}
                </Form.Field>
                {/* /password input */}

                {/* password confirm */}
                <Form.Field>
                  {/* warning label */}
                  {emptyIgnore && (
                    <Label basic color="red" pointing="below">
                      Please enter a confirming password
                    </Label>
                  )}
                  {/* /warning label */}
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                     required
                    label="Confirm Password"
                    type="password"
                    value={re_password}
                    onChange={(e) => {
                      setRe_password(e.target.value);
                      if (e.target.value.length >= 8) {
                        setRePasswordValidate(false);
                      } else {
                        setRePasswordValidate(true);
                      }
                      // password rematch
                      if (e.target.value !== password) {
                        setMatchValidate(true);
                      } else {
                        setMatchValidate(false);
                      }
                    }}
                  />
                  {re_password !== "" && (
                    <div className="d-flex flex-column align-items-start text-primary">
                      <i
                        className={
                          rePasswordValidate ? "text-danger" : "text-success"
                        }
                      >
                        Atleast 8 characters
                      </i>
                      <i
                        className={
                          matchValidate ? "text-danger" : "text-success"
                        }
                      >
                        Password Rematch
                      </i>
                    </div>
                  )}
                </Form.Field>
                {/* /password confirm */}
                {loading ? (
                  <Button loading   style={{background:"#281b11"}}
        
                    className=" primary">
                    Loading
                  </Button>
                ) : (
                  <Button
                    content="Sign Up"
                    size="tiny"
                     style={{background:"#281b11"}}
        
                    className=" primary"
                  />
                )}
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
        {/* /form Contianer */}

        {/*  sign up */}
        <div
          style={{
            borderRadius: 15,
            border: "1px solid #d9d9d9",
          }}
          className="py-2"
        >
          <div className="d-flex align-items-center justify-content-center ">
            <div>Already have an account?</div>

            {/* buttons */}
            <Button   style={{background:"#281b11"}}
        
                    className=" primary mx-3" size="tiny" onClick={()=>{
        
             setOpenRegister(false)
            setTimeout(() => {
                 setRedirect(true)
            }, 500);
          }}>
              <Button.Content visible >
        
                 Log In
                
              </Button.Content>
        
            </Button>
            {/* /buttons */}
          </div>
        </div>
        {/*  /sign up */}
        {/* copy right */}
        <div
          style={{
            marginTop: 60,
          }}
          className="text-primary"
        >
          <Copyright />
        </div>
        {/* /copy right */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  is_authenticated: state.auth.isAthenticated,
});
export default connect(mapStateToProps, { Registration })(Register);
