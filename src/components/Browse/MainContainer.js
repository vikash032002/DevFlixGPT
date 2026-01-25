import { useSelector } from "react-redux";

const MainContainer = () => {
  const videos = useSelector((state) => state.videos.nowPlayingVideos);

  if (!videos || videos.length === 0) return null;

  const { videoId, title, description } = videos[0];

  return (
    <div className="relative w-screen h-[85vh] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-132 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}
          ?autoplay=1
          &mute=1
          &controls=0
          &rel=0
          &modestbranding=1
          &iv_load_policy=3
          &disablekb=1
          &fs=0
          &loop=1
          &playlist=${videoId}`.replace(/\s+/g, "")}
        title="Background Video"
        allow="autoplay; encrypted-media"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      <div className="relative z-10 text-white px-16 pt-[15%] max-w-xl">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <p className="text-sm mb-6 line-clamp-3 text-gray-200">{description}</p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-opacity-80">
            Play
          </button>

          <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
