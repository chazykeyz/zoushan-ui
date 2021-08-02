import React, { useEffect } from "react";
// semantic ui
import { Button, Label, Form, Grid, Segment, Icon } from "semantic-ui-react";

// react router dom
import { NavLink, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { SignIn } from "../../reduxStore/actions/auth";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";


function Copyright() {
  return (
    <p className="secondary">
      {"Zoushan Cosmetics Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

const Login = ({ SignIn, is_authenticated, loginError, setRedirect, setOpenRegister }) => {
  // HOOKS
  // conditional hooks
  const [emptyIgnore, setEmptyIgnore] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // input
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // useeffect
  useEffect(() => {
    if (loginError) {
      toast.error("Oops your entries are invalid!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [loginError]);
  // on submit
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // search for empty input
    if (username === "" || password === "") {
      setEmptyIgnore(true);
      setLoading(false);
    }

    SignIn(username, password).then(() => {
      setLoading(false);
      setRedirect(false)
    });
  };

  if (is_authenticated) {
    return <Redirect to="/checkout" />;
  }
  return (
    <div
      className="col-12 d-flex align-items-starts justify-content-center"

    >
      {/* toastify container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="col-12" >
      <div className="flex justify-between">    
      <h3>Sign in</h3>
        <div onClick={()=>{
              setRedirect(false)
          
          }} className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center bg-white text-black">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
</div></div>
    

        {/* form Contianer */}
        <Segment
          style={{
            borderRadius: 20,
            background: "white",
            border: "none",
          }}
          className="rounded-xl py-4 bg-white border-none"
        >
          <Grid columns={1} stretched>
            <Grid.Column>
              <Form className=" text-left col-12" onSubmit={handleSubmit}>
                {/* brand name input */}
                {/* warning label */}
                {emptyIgnore && (
                  <Label basic color="red" pointing="below">
                    Please enter a Username
                  </Label>
                )}
                {/* /warning label */}
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  placeholder="Username"
                />

                {/* brand name input */}
                {/* forget pass */}
                {/* <div
                  style={{
                    position: "absolute",
                    right: 20,
                  }}
                >
                  <NavLink to="/auth/password-reset/" exact variant="body2">
                    Forgot password?
                  </NavLink>
                </div> */}
                {/* forget pass */}
                {/* password input */}

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
                  value={password}
                    required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {/* password input */}
                {loading ? (
                  <Button        style={{background:"#281b11"}} loading className="col-12">
                    Loading
                  </Button>
                ) : (
                  <Button
                    content="Sign In"
                    size="tiny"
              style={{background:"#281b11"}}
        
                    className=" primary"
                  />
                )}
              </Form>
            </Grid.Column>
          </Grid>
          <div className="flex mt-2"> Dont have an Account Yet , <div onClick={()=>{
            setRedirect(false)
            setTimeout(() => {
              setOpenRegister(true)
            }, 500);
          }} className="text-red-400 mx-2 cursor-pointer"><b> Register</b></div></div>
        </Segment>
        {/* /form Contianer */}

        {/*  sign up */}

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
  loginError: state.auth.error,
});
export default connect(mapStateToProps, { SignIn })(Login);
