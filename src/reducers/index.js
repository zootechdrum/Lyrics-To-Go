import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import { modelReducer, formReducer } from "react-redux-form";

export default combineReducers({
  lyrics: lyricsReducer,
  form: formReducer,
  //This is for testing purposes
  user: modelReducer("user"),
  userForm: formReducer("user"),
});
