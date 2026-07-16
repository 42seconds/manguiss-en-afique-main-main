import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-20 pb-8">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3.5">
              <img
                src="/images/logo.jpg"
                alt="Manguissa en Afrique"
                className="h-28 w-auto object-contain rounded-full"
              />
              <span className="font-bold text-xl">
                Manguissa <span className="text-gold">{t("en Afrique")}</span>
              </span>
            </div>
            <p className="text-sm opacity-60 max-w-[280px] leading-relaxed">
              {t("Votre guide francophone de confiance pour découvrir les merveilles de l'Afrique du Sud.")}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Navigation")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li><Link to="/" className="hover:opacity-70">{t("Accueil")}</Link></li>
              <li><Link to="/circuits" className="hover:opacity-70">{t("Nos Circuits")}</Link></li>
              <li><Link to="/galerie" className="hover:opacity-70">{t("Galerie")}</Link></li>
              <li><Link to="/a-propos" className="hover:opacity-70">{t("À Propos")}</Link></li>
              <li><Link to="/contact" className="hover:opacity-70">{t("Contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Légal")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li><a href="#" className="hover:opacity-70">{t("Mentions légales")}</a></li>
              <li><a href="#" className="hover:opacity-70">{t("Politique de confidentialité")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider opacity-55 font-semibold mb-4">{t("Contact")}</h4>
            <ul className="space-y-2.5 text-sm opacity-85">
              <li>info@manguissaenafrique.com</li>
              <li>+27 81 783 9576</li>
              <li>5 Melrose Street, Johannesburg</li>
            </ul>
            <a
              href="https://www.satsa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-white/5 hover:bg-white/10 transition-colors rounded-brand px-3 py-2"
            >
              <img src="/images/satsa.jpg" alt="Membre SATSA" className="h-7 w-auto rounded-sm" />
              <span className="text-xs opacity-70">{t("Membre agréé SATSA")}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-2.5 text-[13px] opacity-50">
          <span>{t("© 2026 Manguissa en Afrique. Tous droits réservés.")}</span>
          <span>{t("Guide touristique francophone en Afrique du Sud")}</span>
        </div>
      </div>
    </footer>
  );
}
