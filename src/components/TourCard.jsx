import { useNavigate } from "react-router-dom";
import { useCircuit } from "../context/CircuitContext";
import { useLanguage } from "../context/LanguageContext";

export default function TourCard({ circuit, showFilterTag = false, onViewDetails }) {
  const navigate = useNavigate();
  const { setSelectedCircuit } = useCircuit();
  const { t } = useLanguage();

  function handleReserve() {
    setSelectedCircuit(circuit.selectValue);
    navigate("/contact");
  }

  const currency = circuit.currency || "€";

  return (
    <div className="bg-sand rounded-brand overflow-hidden shadow-brand flex flex-col">
      <button
        onClick={() => onViewDetails?.(circuit)}
        className="h-[200px] relative flex items-end p-4 overflow-hidden bg-gradient-to-br from-gold/70 to-navy/70 text-left w-full"
        aria-label={`Voir les détails de ${t(circuit.title)}`}
      >
        <img
          src={circuit.image}
          alt={t(circuit.title)}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex gap-1.5 flex-wrap">
          {circuit.badge && (
            <span className="bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {t(circuit.badge)}
            </span>
          )}
          {showFilterTag && (
            <span className="bg-white/90 text-navy text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
              {t(circuit.category)}
            </span>
          )}
          {circuit.isNew && (
            <span className="bg-navy text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
              {t("Nouveau")}
            </span>
          )}
        </div>
      </button>

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-[13px] opacity-55 mb-1.5">{t(circuit.region)}</div>
        <button
          onClick={() => onViewDetails?.(circuit)}
          className="text-[21px] font-semibold mb-2.5 tracking-tight text-left hover:text-gold transition-colors"
        >
          {t(circuit.title)}
        </button>
        <p className="text-[15px] opacity-70 leading-relaxed flex-1 mb-4">{t(circuit.desc)}</p>
        <div className="text-[13px] opacity-55 mb-3.5">
          {t(circuit.duration)} · {t(circuit.group)}
        </div>
        <div className="flex items-center justify-between border-t border-navy/10 pt-4 mb-3">
          <div className="font-bold text-base">
            {currency === "€" ? `€${circuit.price}` : `${circuit.price} R`}
            <span className="block font-normal text-[13px] opacity-60">
              {t("À partir de")}{circuit.perPerson ? t(" (par personne)") : ""}
            </span>
          </div>
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={() => onViewDetails?.(circuit)}
            className="flex-1 border border-navy/15 hover:border-navy text-navy text-[13px] font-semibold px-4 py-2.5 rounded-brand transition-colors"
          >
            {t("Voir les détails")}
          </button>
          <button
            onClick={handleReserve}
            className="flex-1 bg-gold hover:bg-golddark text-white text-[13px] font-semibold px-4 py-2.5 rounded-brand transition-colors"
          >
            {t("Demander un devis")}
          </button>
        </div>
      </div>
    </div>
  );
}
