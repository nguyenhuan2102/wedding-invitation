import "../style/Hero.css";
import FloatingMusicPlayer from "./FloatingMusicPlayer";
import FloatingNav from "./FloatingNav";
import PropTypes from "prop-types";

const Hero = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="heroSticky">
      <div className="hero-title">LỄ THÀNH HÔN</div>
      <div className="hero-name">
        <div className="hero-name-highlight">Văn Huấn &amp;</div>
        <div className="hero-name-highlight">Kim Chi</div>
      </div>
      <FloatingMusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <FloatingNav />
    </div>
  );
};

Hero.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default Hero;
