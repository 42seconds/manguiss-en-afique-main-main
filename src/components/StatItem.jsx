import { useCountUp } from "../hooks/useCountUp";

/**
 * If `animate` is true, the number counts up from 0 when scrolled into view.
 * Otherwise it just renders the static label (used on the homepage stats band).
 * `icon` is an optional lucide-react component shown above the number.
 */
export default function StatItem({ value, label, animate = false, suffix = "", space = false, icon: Icon }) {
  const { ref, display } = useCountUp(animate ? value : 0, { suffix, space });

  return (
    <div className="text-center" ref={animate ? ref : null}>
      {Icon && (
        <div className="w-11 h-11 rounded-full bg-sand mx-auto mb-3.5 flex items-center justify-center">
          <Icon className="w-5 h-5 text-navy" strokeWidth={1.7} />
        </div>
      )}
      <div className="text-[44px] font-bold tracking-tight">
        {animate ? display : `${space ? value.toLocaleString("fr-FR") : value}${suffix}`}
      </div>
      <div className="text-sm opacity-65 mt-1">{label}</div>
    </div>
  );
}
