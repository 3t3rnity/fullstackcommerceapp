import { CREATE_USER, LOGIN_USER } from "../actionTypes/usersTypes";

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    fatherName: null,
    password: null,
    telephone: null,
    email: null,
  },
  test: "TEst",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, test: action.title };
    case LOGIN_USER:
      return { ...state, test: action.title };
    default:
      return state;
  }
};
