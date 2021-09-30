import ActionTypes from "../constants/action-types";
const initialState = {
  products: [
    {
      id: 1,
      name: "Aatif Ali",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
