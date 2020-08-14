import lyricsApi from "../apis/lyricsApi";

export const fetchLyrics = (song) => async (dispatch) => {
  try {
    let response = await lyricsApi.get(`/${song}`);
    dispatch({ type: "FETCH_LYRICS", payload: response.data.lyrics });
  } catch (err) {
    dispatch({ type: "FETCH_LYRICS", payload: "Fuck You" });
  }
};

export const displayImg = (boo) => {
  return {
    type: "MAIN_CONT_IMG",
    payload: !boo,
  };
};
