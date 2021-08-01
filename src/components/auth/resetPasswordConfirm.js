import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

// material ui
import {
  CssBaseline,
  TextField,
  Box,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// react router dom
import { Redirect } from "react-router-dom";

//
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { connect } from "react-redux";
import { passwordResetConfirm } from "../../reduxStore/actions/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Wasafi Media Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PasswordResetConfirm = ({ passwordResetConfirm, match, res }) => {
  const classes = useStyles();
  // INPUTS
  const [new_password, setPassword] = useState("");
  const [re_new_password, setRe_password] = useState("");

  // validation
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [rePasswordValidate, setRePasswordValidate] = useState(true);
  const [matchValidate, setMatchValidate] = useState(true);

  const [loading, setLoading] = useState(false);

  const uid = match.params.uid;
  const token = match.params.token;

  const [submit, setSubmit] = React.useState(false);

  useEffect(() => {
    if (submit === true) {
      toast.success(
        "Your Email have been Sent, Look at your Email for a link",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [submit]);

  useEffect(() => {
    if (res !== null) {
      console.log(res);
      if (res) {
        setSubmit(true);
        setLoading(false);
      }
    }
  }, [res]);

  if (submit) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    passwordResetConfirm(uid, token, new_password, re_new_password);
  };

  if (submit) {
    return <Redirect to="/" />;
  }
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        height: "100vh",
        marginTop: -65,
        paddingTop: 100,
      }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <img
          src="https://wasafitv.herokuapp.com/static/wasafiIcon.png"
          width="100"
          alt="logo"
        />
        <h5 className="my-3">Password Reset </h5>

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

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* password 1 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="new_password"
                value={new_password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length >= 8) {
                    setPasswordValidate(false);
                  } else {
                    setPasswordValidate(true);
                  }
                }}
                autoComplete="current-password"
              />
              <div className="d-flex flex-column align-items-start">
                <i
                  style={{
                    color: passwordValidate ? "red" : "green",
                  }}
                >
                  Atleast 8 characters
                </i>
              </div>
            </Grid>

            {/* password 2 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="re_new_password"
                label="Confirm Password"
                type="password"
                id="re_new_password "
                autoComplete="current-password"
                value={re_new_password}
                onChange={(e) => {
                  setRe_password(e.target.value);
                  if (e.target.value.length >= 8) {
                    setRePasswordValidate(false);
                  } else {
                    setRePasswordValidate(true);
                  }
                  // password rematch
                  if (e.target.value !== new_password) {
                    setMatchValidate(true);
                  } else {
                    setMatchValidate(false);
                  }
                }}
              />
              <div className="d-flex flex-column align-items-start text-primary">
                <i
                  style={{
                    color: rePasswordValidate ? "red" : "green",
                  }}
                >
                  Atleast 8 characters
                </i>
                <i
                  style={{
                    color: matchValidate ? "red" : "green",
                  }}
                >
                  Password Rematch
                </i>
              </div>
            </Grid>
          </Grid>

          <button type="submit" className="btn btn-primary my-3 col-12">
            {loading && (
              <div
                style={{
                  position: "absolute",
                  left: "46%",
                  top: 0,
                }}
                className="d-flex text-danger justify-content-center"
              >
                <Spinner animation="border" variant="dark" />
              </div>
            )}
            {loading ? "Loading" : "Reset"}
          </button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
const mapStateTopProps = (state) => ({
  res: state.auth.AuthResponse,
});
export default connect(mapStateTopProps, { passwordResetConfirm })(
  PasswordResetConfirm
);
