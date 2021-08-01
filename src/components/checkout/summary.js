import React from "react";
import { connect } from "react-redux";

const Summary = ({ cartItems }) => {
  return (
    <div className="p-4">
      <div className="text-3xl tertiary">Order summary</div>
      {cartItems.length === 0 ? (
        <p>Your Have No Item Yet...</p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div className="flex justify-between my-2" key={product.name}>
              <div>{product.name} </div>
              <div>{product.price}</div>
            </div>
          ))}
          <div className="flex justify-between my-2">
            <div>Total</div>
            <div className="text-2xl font-bold px-4 mx-2 primary  tertiaryBg rounded-xl">
              ${cartItems.reduce((a, c) => a + c.price, 0)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(Summary);
