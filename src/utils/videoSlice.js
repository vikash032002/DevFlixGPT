import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice({
    name: "videos",
    initialState: {
        nowPlayingVideos: null,
    },
    reducers: {
        addNowPlayingVideos: (state,action) => {
            state.nowPlayingVideos = action.payload;
        }
    }
})

export const {addNowPlayingVideos} = videoSlice.actions;

export default videoSlice.reducer;