import {
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from "../actions/exampleAction";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAIL:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default asyncReducer;
