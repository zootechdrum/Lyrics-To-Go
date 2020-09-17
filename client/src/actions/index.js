import lyricsApi from "../apis/lyricsApi";

export const fetchLyrics = (song) => async (dispatch) => {
  try {
    let response = await lyricsApi.get(`/${song}`);
    dispatch({
      type: "FETCH_LYRICS",
      payload: response.data.lyrics.replace(/\r?\n/g, "<br/>"),
    });
  } catch (err) {
    dispatch({ type: "FETCH_LYRICS", payload: "Song lyrics not found" });
  }
};

export const displayImg = (boo) => {
  return {
    type: "MAIN_CONT_IMG",
    payload: !boo,
  };
};
