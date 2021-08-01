import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { Spinner } from "react-bootstrap";
// material ui
import {
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { connect } from "react-redux";
import { passwordReset } from "../../reduxStore/actions/auth";

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

const PasswordReset = ({ passwordReset, res }) => {
  const classes = useStyles();
  const [reset, setReset] = React.useState({
    email: "",
  });

  const [submit, setSubmit] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const { email } = reset;
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

  const onChange = (e) => {
    setReset({ ...reset, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    passwordReset(email);
  };

  useEffect(() => {
    if (res !== null) {
      if (res.status === 204) {
        setSubmit(true);
        setLoading(false);
      }
    }
  }, [res]);

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
        <h5 className="my-3">Password Reset Request </h5>

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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            value={email}
            onChange={(e) => onChange(e)}
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
          />

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
            {loading ? "Loading" : "Request"}
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
export default connect(mapStateTopProps, { passwordReset })(PasswordReset);
