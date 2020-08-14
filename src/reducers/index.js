import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import showImg from "./lyricsReducer";
import { modelReducer, formReducer } from "react-redux-form";

export default combineReducers({
  lyrics: lyricsReducer,
  showImg: showImg,
  form: formReducer,
  //This is for testing purposes
  user: modelReducer("user"),
  userForm: formReducer("user"),
});
