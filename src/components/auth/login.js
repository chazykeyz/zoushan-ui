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

function Copyright() {
  return (
    <p>
      {"Zoushan Cosmetics Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

const Login = ({ SignIn, is_authenticated, loginError }) => {
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
    });
  };

  if (is_authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className="col-12 d-flex align-items-starts justify-content-center"
      style={{
        height: "100vh",
        paddingTop: 100,
      }}
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
      <div className="col-md-6  col-lg-5 col-xl-3 pt-5">
        <h3>Sign in</h3>

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
                  placeholder="Username"
                />

                {/* brand name input */}
                {/* forget pass */}
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                  }}
                >
                  <NavLink to="/auth/password-reset/" exact variant="body2">
                    Forgot password?
                  </NavLink>
                </div>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {/* password input */}
                {loading ? (
                  <Button loading primary className="col-12">
                    Loading
                  </Button>
                ) : (
                  <Button
                    content="Sign In"
                    size="tiny"
                    primary
                    className="col-12"
                  />
                )}
              </Form>
            </Grid.Column>
          </Grid>
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
