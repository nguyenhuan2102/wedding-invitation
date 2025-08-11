
const ThankYou = () => {
  return (
    <div
      className="py-12 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: "#f7d3d0ff" }}
    >
      <h2
        className="text-3xl font-bold mb-4 tracking-wider"
        style={{ color: "#C29897" }}
      >
        💖 Lời Cảm Ơn 💖
      </h2>
      <p
        className="text-lg max-w-2xl mx-auto leading-relaxed"
        style={{ color: "#4B2E39" }}
      >
        Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi.
        <br />
        <span className="font-semibold">KÍNH MỜI!</span>
      </p>
      
      {/* Hiệu ứng trái tim bay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="absolute text-pink-400 text-2xl animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${(Math.random() * 3) + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThankYou;
