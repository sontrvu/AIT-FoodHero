export const COLOR_PRIMARY = '#19A2B1';
export const COLOR_SECONDARY = '#EAEBD1';
export const COLOR_HIGHLIGHT = '#f73d1d';

export const API = {
  baseUrl: 'https://us-central1-ait-foodhero.cloudfunctions.net/api',
  // baseUrl: 'http://localhost:5000/ait-foodhero/us-central1/api',
  userUrl: {
    userLogin: 'user/user-login',
    userRegister: 'user/user-register',
  },
  restaurantUrl: {
    fetchRestaurants: 'restaurant/fetch-restaurants',
    fetchMenuItems: 'restaurant/fetch-menu-items',
  },
  orderUrl: {
    placeOrder: 'order/place-order',
  },
};
