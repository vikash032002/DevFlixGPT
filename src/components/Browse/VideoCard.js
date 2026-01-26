const VideoCard = ({videoId, poster}) => {
    return (
      <div className="mr-4 flex-shrink-0 object-cover rounded">
        <img className="w-[200px] h-[150px]" src={poster} />
      </div>
    );
};

export default VideoCard;