import "./CardVideo.css";
import CardImgBtns from "../CardImgBtns/CardImgBtns";
function CardVideo({ src, title }) {
  return (
    <div className="CardVideo">
      <h5>{title ? title : "Начальное видео"}</h5>

      <video controls  >
        <source src={src ? src : ""} type="video/mp4" />
      </video>

      <CardImgBtns />
    </div>
  );
}

export default CardVideo;
