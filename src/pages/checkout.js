import React from "react";
// react redux import for connecting redux
import { connect } from "react-redux";
// redux action import
import {
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
} from "./../reduxStore/actions/cart";
import { Ordering } from "./../reduxStore/actions/order";
import Login from "../components/auth/login";
import { Redirect } from "react-router-dom";
import Register from "../components/auth/register";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(0,0,0,.02)",
      backdropFilter: "blur(4px)",
    },
  }));
  
const Checkout = ({
  cartItems,
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
  Ordering,
  is_authenticated,
}) => {
  const [sendOrder, setSendOrder] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
   const [openRegister, setOpenRegister] = React.useState(false);

  const classes = useStyles();

  if (sendOrder) {
    return <Redirect to="/adress" />;
  }

  const token = localStorage.getItem("token");


 

  return (
    <div className="grid grid-cols-12">
 
        <Backdrop className={classes.backdrop} open={redirect}>
              <div className="col-md-6  col-lg-5 col-xl-3  ">
               <Login setRedirect={setRedirect} setOpenRegister={setOpenRegister}  />
              </div>
         
        </Backdrop>


        <Backdrop className={classes.backdrop} open={openRegister}>
          <Register setRedirect={setRedirect} setOpenRegister={setOpenRegister} />
        </Backdrop>
      <div className="lg:col-span-8  col-span-10 col-start-2 lg:col-start-3  mt-28 primaryBgb p-4 rounded-3xl">
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-3xl font-md secondary">My </div>
            <div className="text-3xl font-black tertiary">&nbsp; Cart</div>
          </div>
          <div className="flex items-center">
            <div>{cartItems.length} ITEMS</div>
            <div className="text-2xl font-bold px-4 mx-2 primary  tertiaryBg rounded-2xl">
              ${cartItems.reduce((a, c) => a + c.price, 0)}
            </div>
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div className="flex grid grid-cols-12 my-4 divide-y">
                <div className=" col-span-12 10 lg:col-span-3 md:col-span-5">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full rounded-3xl object-cover h-60  lg:h-68"
                  />
                </div>

                <div className="flex justify-between col-span-10 md:col-span-7 lg:col-span-9">
                  <div className="flex flex-col items-start mx-2 my-10">
                    <div className="text-3xl font-black tertiary">
                      {item.name}
                    </div>
                    <small>{item.category.category}</small>
                    <div className="text-2xl font-bold px-4 mx-2 primary  tertiaryBg rounded-2xl">
                      ${item.price}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center my-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          onClick={(e) => decreaseFromCart(cartItems, item)}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </div>
                      <div className="h-10 w-10 flex mx-3 justify-center items-center rounded-full  tertiaryBg text-white">
                        {item.quantity}
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={(e) => increaseFromCart(cartItems, item)}
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      onClick={(e) => removeFromCart(cartItems, item)}
                      className="h-14 w-14 cursor-pointer tertiaryBg primary rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>You have no item added to the cart, Please Shop More </div>
        )}
        <div className="col-span-12 flex justify-end">
          <div
            className="py-2 px-4 secondaryBg rounded-xl cursor-pointer"
            onClick={(e) => clearCart(cartItems)}
          >
            Clear the Cart
          </div>
        </div>
      </div>
      <div className=" lg:col-span-8  col-span-10 col-start-2 lg:col-start-3 flex justify-end">
        <div
          className="py-2 flex  px-4 tertiaryBg primary rounded-xl cursor-pointer mt-10 mb-28"
          onClick={() => {
            if (token !== null) {
              Ordering(cartItems);
              setTimeout(() => {
                setSendOrder(true);
              }, 500);
            }
            if (token === null) {
              setRedirect(true);
            }
          }}
        >
          Order
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  is_authenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
  Ordering,
})(Checkout);
