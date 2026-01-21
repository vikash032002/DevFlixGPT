import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../Header/Header";

const Browser = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* -Main COntainer 
           - video title 
           - Background video
          - secondary contaner
            -movies list* n
            - card*n*/}
    </div>
  );
};

export default Browser;
