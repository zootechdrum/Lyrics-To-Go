import lyricsApi from "../apis/lyricsApi";

export const fetchLyrics = () => async (dispatch) => {
  const response = await lyricsApi.get();

  dispatch({ type: "FETCH_LYRICS", payload: response.data.lyrics });
};
