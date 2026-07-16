import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Languages, ShieldCheck, Compass, SlidersHorizontal, CalendarCheck, Map, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import StatItem from "../components/StatItem";
import TourCard from "../components/TourCard";
import CircuitDetailModal from "../components/CircuitDetailModal";
import Hero from "../components/Hero";
import { circuits, featuredIds } from "../data/circuits";

const whyChoose = [
  {
    icon: Languages,
    title: "100% Francophone",
    desc: "Tous nos guides sont parfaitement francophones pour une expérience sans barrière linguistique.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité Garantie",
    desc: "Voyagez l'esprit tranquille avec nos protocoles de sécurité stricts et notre assurance complète.",
  },
  {
    icon: Compass,
    title: "Expériences Authentiques",
    desc: "Des circuits hors des sentiers battus pour découvrir la vraie Afrique du Sud.",
  },
  {
    icon: SlidersHorizontal,
    title: "Sur-Mesure",
    desc: "Chaque voyage est personnalisé selon vos envies, votre rythme et votre budget.",
  },
];

const testimonials = [
  {
    initials: "MD",
    name: "Marie-Claire Dubois",
    loc: "Paris, France · Safari au Kruger",
    quote:
      "Une expérience incroyable ! Notre guide connaissait chaque recoin du parc Kruger. Nous avons vu les Big Five en une seule journée. Je recommande sans hésitation.",
  },
  {
    initials: "JM",
    name: "Jean-Pierre Martin",
    loc: "Bruxelles, Belgique · Route des Jardins",
    quote:
      "La Route des Jardins est à couper le souffle. Le guide parlait un français impeccable et avait une passion contagieuse pour la nature sud-africaine.",
  },
  {
    initials: "IL",
    name: "Isabelle Lefèvre",
    loc: "Genève, Suisse · Route des Vins",
    quote:
      "La dégustation de vins dans les vignobles de Stellenbosch était magique. Organisation parfaite du début à la fin.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const featured = featuredIds.map((id) => circuits.find((c) => c.id === id));
  const [activeCircuit, setActiveCircuit] = useState(null);
  const { t } = useLanguage();

  return (
    <main>
      <Hero />

      {/* Stats band */}
      <section className="py-16 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem icon={CalendarCheck} value={15} suffix="+" label={t("Années d'expérience")} />
          <StatItem icon={Map} value={50} suffix="+" label={t("Circuits uniques")} />
          <StatItem icon={Languages} value="100%" label={t("Guide Francophone")} />
          <StatItem icon={Star} value="5.0" suffix="/5" label={t("Satisfaction client")} />
        </div>
      </section>

      {/* Featured circuits */}
      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Nos Circuits")}</div>
            <h2 className="text-heading-sm mt-2.5 mb-3.5">{t("Circuits les plus populaires")}</h2>
            <p className="text-lg opacity-65">{t("Des expériences soigneusement conçues pour les voyageurs francophones.")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((c) => (
              <TourCard key={c.id} circuit={c} onViewDetails={setActiveCircuit} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/circuits")}
              className="border border-navy/10 hover:border-navy px-7 py-[15px] rounded-brand font-semibold text-[15px] cursor-pointer"
            >
              {t("Voir tous nos circuits")}
            </button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Pourquoi Nous Choisir")}</div>
            <h2 className="text-heading-sm mt-2.5 mb-3.5">{t("L'Afrique du Sud comme vous ne l'avez jamais vue")}</h2>
            <p className="text-lg opacity-65">
              {t("Depuis plus de 15 ans, nous accompagnons les voyageurs francophones dans leur découverte de l'Afrique du Sud. Notre passion et notre expertise font de chaque voyage un moment inoubliable.")}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {whyChoose.map((w) => (
              <div key={w.title} className="bg-white border border-navy/10 rounded-brand p-7 shadow-brand">
                <div className="w-12 h-12 rounded-full bg-sand mb-5 flex items-center justify-center">
                  <w.icon className="w-[22px] h-[22px] text-navy" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{t(w.title)}</h3>
                <p className="text-sm opacity-65 leading-relaxed">{t(w.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Témoignages")}</div>
            <h2 className="text-heading-sm mt-2.5">{t("Ce que disent nos voyageurs")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tItem) => (
              <div key={tItem.initials} className="bg-sand rounded-brand p-8">
                <p className="text-base leading-relaxed opacity-85 mb-6">{t(tItem.quote)}</p>
                <div className="flex items-center gap-3.5">
                  <div className="w-[42px] h-[42px] rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                    {tItem.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[15px]">{t(tItem.name)}</div>
                    <div className="text-[13px] opacity-55">{t(tItem.loc)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 pb-32 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="bg-navy text-white rounded-brand px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="text-left">
              <div className="text-[13px] uppercase tracking-wider font-semibold" style={{ color: "#ffb27a" }}>
                {t("Prêt pour l'aventure ?")}
              </div>
              <h2 className="text-subheading text-white mt-2.5 mb-2">{t("Créons ensemble votre voyage de rêve")}</h2>
              <p className="opacity-70">
                {t("Contactez-nous pour un devis personnalisé et gratuit. Nos experts sont à votre écoute.")}
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gold hover:bg-golddark text-white font-semibold text-[15px] px-7 py-[15px] rounded-brand sm:whitespace-nowrap text-center cursor-pointer animate-pulse"
            >
              <span className="hidden sm:inline">{t("Recevez votre itinéraire en 24h")}</span>
              <span className="sm:hidden">{t("Itinéraire en 24h")}</span>
            </button>
          </div>
        </div>
      </section>

      <CircuitDetailModal circuit={activeCircuit} onClose={() => setActiveCircuit(null)} />
    </main>
  );
}
