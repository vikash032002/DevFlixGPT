import { useSelector } from "react-redux";
import VideoList from "./VideoList";


const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.videos.nowPlayingVideos);
  const trendingMusic = useSelector((state) => state.videos.musicVideos);
  const currentnews = useSelector((state) => state.videos.newsVideos);
  const gaming = useSelector((state) => state.videos.gamingVideos);
  const sports = useSelector((state) => state.videos.sportsVideos);

 return (
   <div>
     {nowPlaying?.length > 0 && (
       <VideoList title="Now Playing" videos={nowPlaying} />
     )}

     {trendingMusic?.length > 0 && (
       <VideoList title="Trending Music" videos={trendingMusic} />
     )}

     {currentnews?.length > 0 && (
       <VideoList title="Current News" videos={currentnews} />
     )}

     {gaming?.length > 0 && <VideoList title="Gaming" videos={gaming} />}

     {sports?.length > 0 && <VideoList title="Sports" videos={sports} />}
   </div>
 );

};

export default SecondaryContainer;
