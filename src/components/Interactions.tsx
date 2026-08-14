"use client";

import { useEffect } from "react";

/**
 * Document-level behaviour ported from the design's DCLogic class: header
 * scroll state, pointer bloom, row hover treatment, card tilt, scroll reveal
 * and stat count-up. Kept out of the section components so those can stay
 * server-rendered.
 *
 * Every effect is opt-out under prefers-reduced-motion, and the reveal styles
 * are only applied once JS is running, so content is never stranded hidden.
 */
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    const on = <K extends keyof WindowEventMap>(
      target: Window | Element,
      evt: K | string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(evt, fn, opts);
      cleanups.push(() => target.removeEventListener(evt, fn, opts));
    };

    // --- Header scroll state ------------------------------------------------
    const header = document.querySelector("[data-nav]");
    if (header) {
      let ticking = false;
      const update = () => {
        ticking = false;
        header.classList.toggle("is-scrolled", window.scrollY > 24);
      };
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      };
      on(window, "scroll", onScroll, { passive: true });
      update();
    }

    // --- Pointer bloom ------------------------------------------------------
    const bloom = document.querySelector<HTMLElement>("[data-bloom]");
    if (bloom && !reduce && !window.matchMedia("(hover: none)").matches) {
      let x = 0;
      let y = 0;
      let tx = 0;
      let ty = 0;
      let raf: number | null = null;
      let shown = false;

      const tick = () => {
        tx += (x - tx) * 0.09;
        ty += (y - ty) * 0.09;
        bloom.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        raf =
          Math.abs(x - tx) > 0.4 || Math.abs(y - ty) > 0.4
            ? requestAnimationFrame(tick)
            : null;
      };

      on(
        window,
        "pointermove",
        ((e: PointerEvent) => {
          x = e.clientX;
          y = e.clientY;
          if (!shown) {
            shown = true;
            bloom.style.opacity = "1";
          }
          if (!raf) raf = requestAnimationFrame(tick);
        }) as EventListener,
        { passive: true }
      );

      cleanups.push(() => {
        if (raf) cancelAnimationFrame(raf);
      });
    }

    // --- Row hover ----------------------------------------------------------
    document.querySelectorAll<HTMLElement>("[data-row]").forEach((row) => {
      const bar = row.querySelector<HTMLElement>("[data-bar]");
      const title = row.querySelector<HTMLElement>("[data-title]");
      const arrow = row.querySelector<HTMLElement>("[data-arrow]");

      const enter = () => {
        row.style.background = "rgba(111,168,255,0.055)";
        if (bar) bar.style.transform = "scaleY(1)";
        if (title && !reduce) title.style.transform = "translateX(5px)";
        if (arrow) {
          arrow.style.opacity = "1";
          arrow.style.transform = "translateX(0)";
        }
      };

      const leave = () => {
        row.style.background = "transparent";
        if (bar) bar.style.transform = "scaleY(0)";
        if (title) title.style.transform = "translateX(0)";
        if (arrow) {
          arrow.style.opacity = "0";
          arrow.style.transform = "translateX(-6px)";
        }
      };

      on(row, "pointerenter", enter);
      on(row, "pointerleave", leave);
    });

    // --- Card tilt ----------------------------------------------------------
    if (!reduce) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        on(card, "pointermove", ((e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-3px)`;
          card.style.borderColor = "rgba(111,168,255,0.34)";
        }) as EventListener);

        on(card, "pointerleave", () => {
          card.style.transform =
            "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)";
          card.style.borderColor = "";
        });
      });
    }

    // --- Count-up -----------------------------------------------------------
    const countUp = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "true";
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / 1100, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // --- Scroll reveal ------------------------------------------------------
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      document
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((n) => countUp(n));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            el.querySelectorAll<HTMLElement>("[data-count]").forEach((n) =>
              countUp(n)
            );
            io.unobserve(el);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
