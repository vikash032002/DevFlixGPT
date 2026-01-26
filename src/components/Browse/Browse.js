import useNowPlayingVideos from "../../hooks/useNowPlayingVideos";
import Header from "../Header/Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGamingVideos from "../../hooks/useGamingVideo";
import useMusicVideos from "../../hooks/useMusicVideo";
import useNewsVideos from "../../hooks/useNewsVideo";
import useSportsVideos from "../../hooks/useSportsVideo";

const Browser = () => {
  useNowPlayingVideos();
  useGamingVideos();
  useMusicVideos();
  useNewsVideos();
  useSportsVideos();  

  return (
    <div>
      <Header />
      {/* -Main COntainer 
           - video title 
           - Background video
          - secondary contaner
            -movies list* n
            - card*n*/}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
