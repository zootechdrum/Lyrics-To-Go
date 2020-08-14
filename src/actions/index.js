import lyricsApi from "../apis/lyricsApi";

export const fetchLyrics = (song) => async (dispatch) => {
  const response = await lyricsApi.get(`/${song}`);

  dispatch({ type: "FETCH_LYRICS", payload: response.data.lyrics });
};

export const displayImg = (boo) => {
  return {
    type: "MAIN_CONT_IMG",
    payload: !boo,
  };
};
