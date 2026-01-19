import heroImage from "@/assets/hero-football.jpg";
import logoAfc from "@/assets/logo-afc.png";

const Hero = () => {
  const highlights = [
    { line1: "32 Teams", line2: "(U12 & U14)" },
    { line1: "1 Month of", line2: "Competition" },
    { line1: "Full Professional", line2: "Experience" },
    { line1: "Morocco + Africa", line2: "Spirit 🇲🇦🌍" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kids playing football"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        {/* Logo */}
        <div className="pt-24 pb-8">
          <img
            src={logoAfc}
            alt="African Cup Kids Logo"
            className="w-40 h-40 md:w-48 md:h-48 mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] animate-soft-bounce object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl">
          African Cup Kids — Tangier 2025
        </h1>

        {/* Subheadline */}
        <p className="text-2xl md:text-4xl text-white/90 font-semibold mb-6 drop-shadow">
          Where young players dream like African champions
        </p>

        {/* Slogan */}
        <p className="text-lg md:text-2xl text-white/85 mb-14 italic max-w-2xl mx-auto">
          "Africa United. Kids Inspired."
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="text-white font-semibold bg-white/10 backdrop-blur-sm py-6 px-4 rounded-2xl border border-white/20 shadow-md hover:shadow-xl hover:bg-white/15 transition-all cursor-default"
            >
              <div className="text-xl md:text-2xl leading-tight">{item.line1}</div>
              <div className="text-lg md:text-xl leading-tight mt-1">{item.line2}</div>
            </div>
          ))}
        </div>



        {/* Countdown */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-4xl text-white font-bold mb-2 drop-shadow">
            Countdown to Grand Final
          </h3>
          <p className="text-xl md:text-3xl text-white/90 font-semibold">
            24 Jan 2026
          </p>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 ">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32V120H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;