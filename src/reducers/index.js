import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import showImg from "./showImg";
import { modelReducer, formReducer } from "react-redux-form";

export default combineReducers({
  lyrics: lyricsReducer,
  showImg: showImg,
  form: formReducer,
  //This is for testing purposes
  artist: modelReducer("artist"),
  artistForm: formReducer("artist"),
});
