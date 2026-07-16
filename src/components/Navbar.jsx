import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/circuits", label: "Nos Circuits" },
  { to: "/galerie", label: "Galerie" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium pb-1.5 border-b-2 transition-opacity ${
      isActive ? "opacity-100 border-gold" : "opacity-70 border-transparent hover:opacity-100"
    }`;

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-navy/10">
      <div className="max-w-[1180px] mx-auto px-6 py-5 lg:py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="Manguissa en Afrique" className="h-28 sm:h-32 lg:h-36 w-auto object-contain rounded-full" />
          <span className="font-bold text-xl sm:text-2xl lg:text-xl tracking-tight">
            Manguissa <span className="text-gold">{t("en Afrique")}</span>
          </span>
        </NavLink>

        <div className="flex items-center gap-4 lg:gap-6">
          <nav className={`lg:flex gap-8 ${open ? "flex" : "hidden"} flex-col lg:flex-row absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent border-b lg:border-0 border-navy/10 px-8 py-6 lg:p-0 gap-y-4`}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
                {t(l.label)}
              </NavLink>
            ))}

            {/* Mobile Language Toggle */}
            <div className="lg:hidden pt-4 mt-2 border-t border-navy/10 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-gold">{t("Langue")}</span>
              <button
                onClick={toggleLanguage}
                className="self-start flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 border border-navy/15 rounded-full hover:bg-navy/5 transition-colors uppercase cursor-pointer"
                title={language === "fr" ? "Switch to English" : "Passer en français"}
              >
                <Globe className="h-3.5 w-3.5 text-navy/70" />
                <span className={language === "fr" ? "text-navy font-bold" : "text-navy/40"}>FR</span>
                <span className="text-navy/20">|</span>
                <span className={language === "en" ? "text-navy font-bold" : "text-navy/40"}>EN</span>
              </button>
            </div>
          </nav>

          {/* Language Toggle Button (Desktop only) */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 border border-navy/15 rounded-full hover:bg-navy/5 transition-colors uppercase cursor-pointer"
            title={language === "fr" ? "Switch to English" : "Passer en français"}
          >
            <Globe className="h-3 w-3 text-navy/70" />
            <span className={language === "fr" ? "text-navy font-bold" : "text-navy/40"}>FR</span>
            <span className="text-navy/20">|</span>
            <span className={language === "en" ? "text-navy font-bold" : "text-navy/40"}>EN</span>
          </button>

          <NavLink
            to="/contact"
            className="hidden lg:inline-flex bg-gold text-white px-[22px] py-[11px] rounded-full font-semibold text-sm whitespace-nowrap hover:bg-golddark transition-colors"
          >
            {t("Demander un devis")}
          </NavLink>

          <button className="lg:hidden text-2xl p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
