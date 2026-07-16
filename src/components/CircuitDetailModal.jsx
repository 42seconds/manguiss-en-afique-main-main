import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Clock, Users, CheckCircle2, XCircle } from "lucide-react";
import { useCircuit } from "../context/CircuitContext";
import { useLanguage } from "../context/LanguageContext";

export default function CircuitDetailModal({ circuit, onClose }) {
  const navigate = useNavigate();
  const { setSelectedCircuit } = useCircuit();
  const { t } = useLanguage();

  // Close on Escape, lock background scroll while open
  useEffect(() => {
    if (!circuit) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [circuit, onClose]);

  if (!circuit) return null;

  const currency = circuit.currency || "€";
  const priceDisplay = currency === "€" ? `€${circuit.price}` : `${circuit.price} R`;

  function handleContinue() {
    setSelectedCircuit(circuit.selectValue);
    onClose();
    navigate("/contact");
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-navydeep/60"
      onClick={onClose}
    >
      <div
        className="bg-bg w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-brand shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={circuit.image}
            alt={t(circuit.title)}
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navydeep/80 via-navydeep/10 to-transparent" />
          <button
            onClick={onClose}
            aria-label={t("Fermer")}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center"
          >
            <X className="w-[18px] h-[18px] text-navy" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-wider opacity-80 mb-1">{t(circuit.region)}</div>
            <h2 className="text-2xl font-semibold leading-tight">{t(circuit.title)}</h2>
          </div>
        </div>

        <div className="p-7">
          {circuit.subtitle && <p className="text-base opacity-70 mb-6">{t(circuit.subtitle)}</p>}

          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-navy/10">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gold" strokeWidth={1.8} />
              {t(circuit.duration)}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-gold" strokeWidth={1.8} />
              {t(circuit.group)}
            </div>
            <div className="ml-auto font-bold text-lg">
              {priceDisplay}
              <span className="font-normal text-xs opacity-60 ml-1">
                {t("à partir de")}{circuit.perPerson ? t(" / pers.") : ""}
              </span>
            </div>
          </div>

          {circuit.about?.length > 0 && (
            <div className="mb-7 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold mb-2">{t("À propos")}</h3>
              {circuit.about.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed opacity-80">
                  {t(p)}
                </p>
              ))}
            </div>
          )}

          {circuit.highlights?.length > 0 && (
            <div className="mb-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold mb-3">{t("Points forts")}</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {circuit.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <span className="opacity-85">{t(h)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {circuit.included?.length > 0 && (
            <div className="mb-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gold mb-3">{t("Ce qui est inclus")}</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {circuit.included.map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <span className="opacity-85">{t(inc)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {circuit.notIncluded?.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide opacity-50 mb-3">{t("Non inclus")}</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {circuit.notIncluded.map((exc) => (
                  <li key={exc} className="flex items-start gap-2 text-sm opacity-60">
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {t(exc)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-8 pt-6 border-t border-navy/10">
            <button
              onClick={onClose}
              className="flex-1 border border-navy/15 hover:border-navy text-navy font-semibold py-3 rounded-brand transition-colors"
            >
              {t("Annuler")}
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 bg-gold hover:bg-golddark text-white font-semibold py-3 rounded-brand transition-colors"
            >
              {t("Continuer vers la demande")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
