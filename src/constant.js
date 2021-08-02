// const Host = "http://127.0.0.1:8000/";
const Host = "https://zoushancosmetics.herokuapp.com/";

const MainRoot = `${Host}api/`;

export const slideAPI = `${MainRoot}slide/`;
export const testimoniesAPI = `${MainRoot}testimonies/`;
export const productsAPI = `${MainRoot}products/`;
export const categoriesAPI = `${MainRoot}categories/`;

// AUTH
export const RegisterAPI = `${Host}auth/users/`;
export const LoginAPI = `${Host}auth/jwt/create/`;
export const tokenAPI = `${Host}auth/jwt/refresh/`;
export const userAPI = `${Host}auth/users/me/`;
export const PasswordResetAPI = `${Host}auth/users/reset_password/`;
export const PasswordResetConfirmAPI = `${Host}auth/users/reset_password_confirm/`;
export const AuthCheckAPI = `${Host}auth/jwt/verify/`;

// user API endpoints
export const userAllAPI = `${MainRoot}user`;
export const userAllWritableAPI = `${MainRoot}user-writable/`;
export const usermeAPI = `${MainRoot}single-user/`;

export const CartAPI = `${MainRoot}cart/`;
export const CartReadAPI = `${MainRoot}cart-read/`;
export const OrderAPI = `${MainRoot}order/`;
export const OrderReadAPI = `${MainRoot}order-read/`;
