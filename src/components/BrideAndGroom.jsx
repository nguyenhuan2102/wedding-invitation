import '../style/BrideAndGroom.css';

const BrideAndGroom = () => {
  return (
    <div className="bride-groom-container">
      <div className="portrait-wrapper">
        <div className="portrait-frame bride-frame bg-[#F1DDDB]">
          <img src="/bride.jpg" alt="Bride" className="portrait-image" />
        </div>
        <div className="portrait-details">
          <h2 className="name tracking-wider text-[#aa8787] animate-pulse">
            Nguyễn Thị Kim Chi
          </h2>
          <p className="info text-[#a08c8a]">Trưởng nữ</p>
          <p className="info text-[#a4706f]">Cha mẹ: Nguyễn Văn N &amp; Trần Thị B</p>
          <p className="info text-[#a4706f]">Tân Dân, Hà Tĩnh</p>
        </div>
      </div>
      <div className="portrait-wrapper">
        <div className="portrait-frame groom-frame bg-[#D8B5B4]">
          <img src="/groom.jpg" alt="Groom" className="portrait-image" />
        </div>
        <div className="portrait-details">
          <h2 className="name tracking-wider text-[#aa8787] animate-pulse">
            Nguyễn Văn Huấn
          </h2>
          <p className="info text-[#a08c8a]">Thứ nam</p>
          <p className="info text-[#a4706f]">Cha mẹ: Nguyễn Văn T &amp; Ngô Thị S</p>
          <p className="info text-[#a4706f]">Phúc Lộc, Nghệ An</p>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
