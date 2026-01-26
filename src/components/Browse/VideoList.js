import { useRef } from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ title, videos }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <h2 className="text-white text-xl mt-2 mb-2">{title}</h2>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-0 h-full w-12 
                   bg-gradient-to-r from-black/70 to-transparent
                   text-white text-3xl z-10
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
      >
        ‹
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-0 h-full w-12
                   bg-gradient-to-l from-black/70 to-transparent
                   text-white text-3xl z-10
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
      >
        ›
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 hide-scrollbar px-12"
      >
        {videos.map((video) => (
          <VideoCard
            key={video.videoId}
            videoId={video.videoId}
            poster={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
