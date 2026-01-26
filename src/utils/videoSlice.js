import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
  name: "videos",
  initialState: {
    nowPlayingVideos: null,
    musicVideos: null,
    newsVideos: null,
    gamingVideos: null,
    sportsVideos: null,
  },
  reducers: {
    addNowPlayingVideos: (state, action) => {
      state.nowPlayingVideos = action.payload;
    },
    addMusicVideos: (state, action) => {
      state.musicVideos = action.payload;
    },
    addNewsVideos: (state, action) => {
      state.newsVideos = action.payload;
    },
    addGamingVideos: (state, action) => {
      state.gamingVideos = action.payload;
    },
    addSportsVideos: (state, action) => {
      state.sportsVideos = action.payload;
    },
  },
});

export const {addNowPlayingVideos,addGamingVideos,addMusicVideos,addNewsVideos,addSportsVideos} = videoSlice.actions;

export default videoSlice.reducer;