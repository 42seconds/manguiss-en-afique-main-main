import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center text-center text-white px-8 py-32 overflow-hidden bg-gradient-to-br from-gold via-golddark to-navydeep">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          onError={(e) => (e.currentTarget.style.display = "none")}
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
              "linear-gradient(180deg, rgba(13,26,48,0.28) 0%, rgba(13,26,48,0.48) 55%, rgba(13,26,48,0.78) 100%), radial-gradient(circle at 30% 20%, rgba(232,179,74,0.45) 0%, transparent 48%)",
        }}
      />

      <div className="relative z-[2] max-w-[820px]">
        <div className="text-[13px] tracking-[2px] uppercase font-semibold mb-4" style={{ color: "#ffd9a8" }}>
          {t("+500 voyageurs satisfaits")}
        </div>
        <h1 className="text-display text-white mb-6">
          {language === "fr" ? (
            <>
              Découvrez l'Afrique
              <br />
              du Sud en <span className="text-gold">français</span>
            </>
          ) : (
            <>
              Discover South
              <br />
              Africa in <span className="text-gold">French</span>
            </>
          )}
        </h1>
        <p className="text-[19px] text-white/90 max-w-[560px] mx-auto mb-10">
          {t("Des safaris aux vignobles, vivez une expérience authentique avec nos guides francophones passionnés.")}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => navigate("/circuits")}
            className="bg-gold hover:bg-golddark text-white font-semibold text-[15px] px-7 py-[15px] rounded-brand transition-transform hover:-translate-y-0.5"
          >
            {t("Découvrir nos circuits")}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white/10 border border-white/35 text-white font-semibold text-[15px] px-7 py-[15px] rounded-brand transition-transform hover:-translate-y-0.5"
          >
            {t("Nous contacter")}
          </button>
        </div>
      </div>
    </section>
  );
}
