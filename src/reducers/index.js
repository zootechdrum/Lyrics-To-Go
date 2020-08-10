import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  lyrics: lyricsReducer,
  form: formReducer,
});
