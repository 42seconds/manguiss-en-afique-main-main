import { useNavigate } from "react-router-dom";
import { MapPinned, Users, Hotel, HeadphonesIcon, FileCheck, PiggyBank } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import StatItem from "../components/StatItem";

const services = [
  {
    icon: MapPinned,
    title: "Itinéraires sur mesure",
    desc: "Nous concevons chaque circuit autour de vos envies, votre rythme et votre budget — aucun voyage standard.",
  },
  {
    icon: Users,
    title: "Guides francophones experts",
    desc: "Des guides certifiés FGASA qui parlent votre langue et connaissent le terrain, la faune et la culture locale.",
  },
  {
    icon: Hotel,
    title: "Logistique complète",
    desc: "Hébergement, transport, transferts et activités : nous coordonnons tout, du premier au dernier jour.",
  },
  {
    icon: FileCheck,
    title: "Permis et réservations",
    desc: "Réserves nationales, parcs privés, domaines viticoles — nous gérons les réservations et accès en amont.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support pendant le voyage",
    desc: "Une ligne directe avec notre équipe tout au long de votre séjour, en cas de question ou d'imprévu.",
  },
  {
    icon: PiggyBank,
    title: "Devis gratuit et transparent",
    desc: "Un itinéraire détaillé et un prix clair sous 24h, sans frais cachés ni engagement.",
  },
];

const team = [
  {
    initials: "PL",
    name: "Pierre Lavigne",
    role: "Fondateur & Guide Principal",
    bio: "Passionné par les deux cultures, Pierre a créé Manguissa en Afrique pour partager sa double culture avec les voyageurs francophones.",
  },
  {
    initials: "SM",
    name: "Sophie Morel",
    role: "Directrice des Opérations",
    bio: "Après 10 ans dans le tourisme de luxe en France, Sophie veille à un service d'excellence pour chaque voyageur.",
  },
  {
    initials: "TN",
    name: "Thabo Nkosi",
    role: "Guide Safari Expert",
    bio: "Originaire du Mpumalanga, Thabo est un guide certifié FGASA qui parle couramment le français. Sa connaissance de la brousse est inégalée.",
  },
  {
    initials: "CB",
    name: "Claire Beaumont",
    role: "Spécialiste Œnotourisme",
    bio: "Sommelière diplômée, Claire conçoit nos circuits vinicoles et partage sa passion pour les vins sud-africains.",
  },
];

export default function About() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main>
      <section className="pt-40 pb-0 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Depuis 2010")}</div>
          <h1 className="text-heading-lg mt-2.5">{t("À Propos")}</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[760px] mx-auto px-8 text-center space-y-5">
          <h2 className="text-subheading">{t("Le pont entre la francophonie et l'Afrique du Sud")}</h2>
          <p className="text-lg opacity-72 leading-relaxed">
            {t("Manguissa en Afrique est né d'une conviction simple : les voyageurs francophones méritent de découvrir l'Afrique du Sud dans leur langue, avec des guides qui comprennent leur culture et leurs attentes.")}
          </p>
          <p className="text-lg opacity-72 leading-relaxed">
            {t("Fondée en 2010, notre entreprise a commencé avec un seul guide et un rêve. Aujourd'hui, nous sommes une équipe de passionnés qui accompagnent chaque année des centaines de francophones venus de France, de Belgique, de Suisse, du Canada et d'Afrique francophone.")}
          </p>
          <p className="text-lg opacity-72 leading-relaxed">
            {t("Chaque circuit est conçu avec soin pour offrir une expérience authentique, loin du tourisme de masse. Nous croyons que voyager, c'est avant tout rencontrer, partager et s'émerveiller.")}
          </p>
        </div>
      </section>

      {/* What we actually do for clients */}
      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Notre rôle")}</div>
            <h2 className="text-heading-sm mt-2.5 mb-3.5">{t("Ce que nous faisons pour vous")}</h2>
            <p className="text-lg opacity-65">
              {t("De la première idée à votre retour, nous prenons en charge l'ensemble de l'organisation de votre voyage.")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-navy/10 rounded-brand p-7 shadow-brand">
                <div className="w-12 h-12 rounded-full bg-sand mb-5 flex items-center justify-center">
                  <s.icon className="w-[22px] h-[22px] text-navy" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{t(s.title)}</h3>
                <p className="text-sm opacity-65 leading-relaxed">{t(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated stats — count up when scrolled into view */}
      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem value={15} suffix="+" label={t("Années d'expérience")} animate />
          <StatItem value={5000} suffix="+" space label={t("Voyageurs accompagnés")} animate />
          <StatItem value={50} suffix="+" label={t("Circuits disponibles")} animate />
          <StatItem value={98} suffix="%" label={t("Taux de satisfaction")} animate />
        </div>
      </section>

      <section className="py-24 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">{t("Votre équipe")}</div>
            <h2 className="text-heading-sm mt-2.5 mb-3.5">{t("Nos Guides")}</h2>
            <p className="text-lg opacity-65">{t("Des passionnés à votre service, à chaque étape de votre voyage.")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.initials} className="bg-white border border-navy/10 rounded-brand p-7 text-center shadow-brand">
                <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {m.initials}
                </div>
                <h3 className="font-semibold text-[17px] mb-1">{t(m.name)}</h3>
                <div className="text-[13px] text-gold font-semibold mb-3">{t(m.role)}</div>
                <p className="text-[13.5px] opacity-65 leading-relaxed">{t(m.bio)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 pb-32 border-t border-navy/10">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="bg-navy text-white rounded-brand px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="text-left">
              <h2 className="text-subheading text-white mb-2">{t("Prêt à nous rencontrer ?")}</h2>
              <p className="opacity-70">{t("Parlons de votre prochain voyage en Afrique du Sud.")}</p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gold hover:bg-golddark text-white font-semibold text-[15px] px-7 py-[15px] rounded-brand whitespace-nowrap cursor-pointer"
            >
              {t("Planifier mon voyage")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
