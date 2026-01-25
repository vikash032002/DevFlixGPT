import useNowPlayingVideos from "../../hooks/useNowPlayingVideos";
import Header from "../Header/Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingVideos();

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
