import media from "../../assets/media/loading.mp4";

const Loading = () => {
  return (
    <div className="loading">
      <video className="notFoundContainer__videoTag" autoPlay loop muted>
        <source src={media} type="video/mp4" />
      </video>
    </div>
  );
};
export default Loading;
