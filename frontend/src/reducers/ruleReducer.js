import {
  ADD_RULE,
  GET_RULES,
  GET_RULE,
  RULE_LOADING,
  UPDATE_RULE,
} from "../actions/types";

const initialState = {
  rules: [],
  rule: {},
  loading: false,
  updatedRule: {},
};

export default function ruleReducer(state = initialState, action) {
  switch (action.type) {
    case RULE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_RULES:
      return {
        ...state,
        rules: action.payload,
        loading: false,
      };
    case GET_RULE:
      return {
        ...state,
        rule: action.payload,
        loading: false,
      };
    case UPDATE_RULE:
      return {
        ...state,
        updatedRule: action.payload,
        loading: false,
      };
    case ADD_RULE:
      return {
        ...state,
        rule: action.payload,
      };
    default:
      return state;
  }
}
