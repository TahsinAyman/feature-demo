import { combineReducers } from "redux";
import { personReducer } from "./module/person/service/slice";

const reducer = {
  entities: combineReducers({
    persons: personReducer
  })
};
export default reducer;