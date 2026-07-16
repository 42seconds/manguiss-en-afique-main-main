import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` once the returned ref scrolls into view.
 * suffix: text appended after the number (e.g. "+", "%")
 * space: if true, formats the number with French thousands separators
 */
export function useCountUp(target, { suffix = "", space = false, duration = 1300 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            function frame(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const text = space ? value.toLocaleString("fr-FR") : String(value);
  return { ref, display: `${text}${suffix}` };
}
