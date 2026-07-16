import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";

const items = [
  {
    num: "01",
    label: "Safari au Parc Kruger",
    category: "Safari",
    image: "/images/kruger.jpg",
    desc: "Rencontre avec les Big Five dans la brousse mythique."
  },
  {
    num: "02",
    label: "Route des Vins",
    category: "Gastronomie",
    image: "/images/stellenbosch.jpg",
    desc: "Dégustations d'exception au cœur de vignobles centenaires."
  },
  {
    num: "03",
    label: "Route des Jardins",
    category: "Nature",
    image: "/images/garden-route.jpg",
    desc: "Un littoral sauvage entre forêts denses et lagunes d'émeraude."
  },
  {
    num: "04",
    label: "Le Cap",
    category: "Villes",
    image: "/images/cape-town.jpg",
    desc: "Une péninsule spectaculaire dominée par l'emblématique Table Mountain."
  },
  {
    num: "05",
    label: "Drakensberg",
    category: "Nature",
    image: "/images/drakensberg.jpg",
    desc: "Des sommets grandioses sculptés par le vent et l'histoire."
  },
  {
    num: "06",
    label: "Johannesburg",
    category: "Villes",
    image: "/images/johannesburg.jpg",
    desc: "L'énergie créative de la métropole d'or de l'Afrique."
  },
  {
    num: "07",
    label: "Soweto",
    category: "Culture",
    image: "/images/soweto.jpg",
    desc: "Plongez au cœur de l'histoire vibrante de la lutte pour la liberté."
  },
  {
    num: "08",
    label: "Pretoria",
    category: "Villes",
    image: "/images/pretoria.jpg",
    desc: "La capitale administrative baignée dans la violette des jacarandas."
  },
  {
    num: "09",
    label: "Durban & Culture Zouloue",
    category: "Culture",
    image: "/images/durban-zulu.jpg",
    desc: "Un littoral subtropical chaleureux imprégné des traditions zouloues."
  },
  {
    num: "10",
    label: "Sun City",
    category: "Loisirs",
    image: "/images/sun-city.jpg",
    desc: "Un oasis de divertissement extraordinaire au milieu du bushveld."
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = items;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="bg-sand/30 min-h-screen">
      {/* Header section with rich spacing */}
      <section className="pt-40 pb-12 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold mb-2">{t("Galerie")}</div>
          <h1 className="text-heading-lg font-bold text-navy mt-1.5 mb-4">{t("Nos voyages en images")}</h1>
          <p className="text-lg opacity-65 max-w-[580px] mx-auto leading-relaxed">
            {t("Un aperçu des moments capturés par nos voyageurs et nos guides à travers l'Afrique du Sud.")}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32">
        <div className="max-w-[1180px] mx-auto px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-navy/40">
              <ImageIcon className="mx-auto h-12 w-12 opacity-30 mb-3" />
              <p className="text-base font-medium">{t("Aucune image disponible")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredItems.map((it, idx) => (
                <div
                  key={it.label}
                  onClick={() => openLightbox(idx)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Clean Image Container with fixed Aspect Ratio */}
                  <div className="relative aspect-[3/2] w-full rounded-brand overflow-hidden bg-navy/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
                    <img
                      src={it.image}
                      alt={t(it.label)}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    
                    {/* Minimal overlay effect */}
                    <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Clean Editorial Metadata placed underneath */}
                  <div className="mt-4 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                      <span>{it.num}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                      <span>{t(it.category)}</span>
                    </div>
                    
                    <h3 className="text-[17px] font-semibold text-navy mt-1.5 group-hover:text-gold transition-colors duration-200">
                      {t(it.label)}
                    </h3>
                    
                    <p className="text-[13.5px] opacity-60 leading-relaxed mt-1.5">
                      {t(it.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Lightbox Header */}
          <div className="w-full flex justify-between items-center text-white/80 select-none">
            <span className="text-[13px] uppercase tracking-wider font-mono">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Lightbox Body */}
          <div className="relative flex-1 flex items-center justify-center max-h-[75vh]">
            <button
              onClick={showPrev}
              className="absolute left-0 md:-left-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={filteredItems[lightboxIndex].image}
              alt={t(filteredItems[lightboxIndex].label)}
              className="max-w-full max-h-full object-contain rounded-brand shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={showNext}
              className="absolute right-0 md:-right-4 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Lightbox Footer */}
          <div 
            className="w-full max-w-[640px] mx-auto text-center text-white pb-4 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-1.5">
              {t(filteredItems[lightboxIndex].category)}
            </div>
            <h2 className="text-xl font-bold mb-2">
              {t(filteredItems[lightboxIndex].label)}
            </h2>
            <p className="text-sm opacity-70 leading-relaxed">
              {t(filteredItems[lightboxIndex].desc)}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
