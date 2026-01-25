import { useDispatch } from "react-redux";
import { addNowPlayingVideos } from "../utils/videoSlice";
import { useEffect } from "react";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const FALLBACK_VIDEO = {
  videoId: "xmbxe0Jtxmc",
  title: "Featured Experience",
  description:
    "We’re curating the best content for you behind the scenes. In the meantime, enjoy this featured video — selected to deliver quality, relevance, and a seamless viewing experience from the very first moment.",
  thumbnail: "",
};

const useNowPlayingVideos = () => {
  const dispatch = useDispatch();

  const getNowPlayingVideos = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos
          ?part=snippet
          &chart=mostPopular
          &regionCode=IN
          &maxResults=10
          &key=${YOUTUBE_API_KEY}`.replace(/\s+/g, ""),
      );



      const json = await res.json();
      debugger
      if (json.error) {
        throw new Error(json.error.message);
      }

      const videos = json.items.map((item) => ({
        videoId: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
      }));

      dispatch(addNowPlayingVideos(videos));
    } catch (error) {
      // console.error("YouTube API failed:", error.message);

      dispatch(addNowPlayingVideos([FALLBACK_VIDEO]));
    }
  };

  useEffect(() => {
    getNowPlayingVideos();
  }, []);
};

export default useNowPlayingVideos;
