"use client";

import { useEffect } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&";

/**
 * Document-level behaviour ported from the design's DCLogic: headline reveal,
 * scroll reveal + count-up, progress bar, header state and scroll spy, pointer
 * spotlight and custom cursor, magnetic buttons, row/accordion hover with
 * number scramble, glass sheen and tilt, and marquee pause-on-hover.
 *
 * Kept out of the section components so those stay server-rendered. Everything
 * is skipped under prefers-reduced-motion or a coarse pointer.
 */
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const on = (
      target: Window | Document | Element,
      evt: string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(evt, fn, opts);
      cleanups.push(() => target.removeEventListener(evt, fn, opts));
    };

    const accent = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();

    // --- Headline ----------------------------------------------------------
    // `.js` gates the masked start state so a JS-less page never hides it.
    document.documentElement.classList.add("js");
    const lines = Array.from(
      document.querySelectorAll<HTMLElement>(".hero-line")
    );
    if (reduce) {
      lines.forEach((l) => l.classList.add("is-in"));
    } else {
      lines.forEach((l, i) => {
        l.style.transition = `transform 1s cubic-bezier(0.16,1,0.3,1) ${
          i * 0.09 + 0.05
        }s`;
      });
      requestAnimationFrame(() =>
        lines.forEach((l) => l.classList.add("is-in"))
      );
    }

    // --- Count-up ----------------------------------------------------------
    const countUp = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "true";
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / 1200, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // --- Scroll reveal -----------------------------------------------------
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
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // --- Progress bar, header state and scroll spy -------------------------
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const header = document.querySelector<HTMLElement>("[data-nav]");
    const links = Array.from(
      document.querySelectorAll<HTMLElement>("[data-navlink]")
    );
    const spied = links
      .map((link) => ({
        link,
        el: document.getElementById(link.getAttribute("data-navlink") || ""),
      }))
      .filter((s): s is { link: HTMLElement; el: HTMLElement } => Boolean(s.el));

    let ticking = false;
    const update = () => {
      ticking = false;

      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${
          max > 0 ? Math.min(window.scrollY / max, 1) : 0
        })`;
      }

      header?.classList.toggle("is-scrolled", window.scrollY > 20);

      let active: HTMLElement | null = null;
      const probe = window.scrollY + window.innerHeight * 0.32;
      spied.forEach((s) => {
        if (s.el.offsetTop <= probe) active = s.link;
      });
      links.forEach((l) => l.classList.toggle("is-active", l === active));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", update);
    update();

    // --- Pointer: spotlight, cursor, magnetic, statcells --------------------
    const spot = document.querySelector<HTMLElement>("[data-spot]");
    const dot = document.querySelector<HTMLElement>("[data-cursor-dot]");
    const ring = document.querySelector<HTMLElement>("[data-cursor-ring]");

    if (fine && !reduce) {
      let mx = 0;
      let my = 0;
      let sx = 0;
      let sy = 0;
      let rx = 0;
      let ry = 0;
      let raf: number | null = null;
      let seen = false;

      const tick = () => {
        sx += (mx - sx) * 0.07;
        sy += (my - sy) * 0.07;
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        if (spot) spot.style.transform = `translate3d(${sx}px,${sy}px,0)`;
        if (dot) dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
        if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        raf = requestAnimationFrame(tick);
      };

      on(
        window,
        "pointermove",
        ((e: PointerEvent) => {
          mx = e.clientX;
          my = e.clientY;
          if (seen) return;
          seen = true;
          [spot, dot, ring].forEach((el) => {
            if (el) el.style.opacity = "1";
          });
          raf = requestAnimationFrame(tick);
        }) as EventListener,
        { passive: true }
      );

      cleanups.push(() => {
        if (raf) cancelAnimationFrame(raf);
      });

      if (ring) {
        document.querySelectorAll<HTMLElement>("[data-hover]").forEach((el) => {
          on(el, "pointerenter", () => ring.classList.add("is-hovering"));
          on(el, "pointerleave", () => ring.classList.remove("is-hovering"));
        });
      }

      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        on(el, "pointerenter", () => {
          el.style.transition =
            "box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease";
        });
        on(el, "pointermove", ((e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          el.style.transform = `translate(${dx * 5}px,${dy * 4}px)`;
        }) as EventListener);
        on(el, "pointerleave", () => {
          el.style.transition =
            "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease";
          el.style.transform = "translate(0,0)";
        });
      });

      document.querySelectorAll<HTMLElement>("[data-statcell]").forEach((cell) => {
        on(cell, "pointerenter", () => {
          cell.style.background = `color-mix(in srgb, ${accent()} 3.5%, transparent)`;
        });
        on(cell, "pointerleave", () => {
          cell.style.background = "transparent";
        });
      });
    } else {
      [dot, ring].forEach((el) => {
        if (el) el.style.display = "none";
      });
    }

    // --- Number scramble ---------------------------------------------------
    const scramble = (el: HTMLElement) => {
      const final = el.getAttribute("data-scramble") || el.textContent || "";
      if (el.dataset.busy) return;
      el.dataset.busy = "true";
      let frame = 0;
      const total = 9;
      const run = () => {
        frame += 1;
        if (frame >= total) {
          el.textContent = final;
          delete el.dataset.busy;
          return;
        }
        el.textContent = final
          .split("")
          .map((c, i) =>
            frame / total > (i + 1) / final.length
              ? c
              : SCRAMBLE_CHARS[
                  Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                ]
          )
          .join("");
        setTimeout(run, 34);
      };
      run();
    };

    // --- Row / accordion hover ---------------------------------------------
    document
      .querySelectorAll<HTMLElement>("[data-acc], [data-row]")
      .forEach((row) => {
        const rowBar = row.querySelector<HTMLElement>("[data-bar]");
        const title = row.querySelector<HTMLElement>("[data-title]");
        const num = row.querySelector<HTMLElement>("[data-scramble]");

        on(row, "pointerenter", () => {
          row.style.background = "rgba(255,255,255,0.022)";
          if (rowBar) rowBar.style.transform = "scaleY(1)";
          if (title && !reduce) title.style.transform = "translateX(8px)";
          if (num && !reduce) scramble(num);
        });
        on(row, "pointerleave", () => {
          row.style.background = "transparent";
          if (rowBar) rowBar.style.transform = "scaleY(0)";
          if (title) title.style.transform = "translateX(0)";
        });
      });

    // --- Glass sheen + tilt -------------------------------------------------
    document.querySelectorAll<HTMLElement>("[data-glass]").forEach((card) => {
      const sheen = card.querySelector<HTMLElement>("[data-sheen]");
      const tilt = card.hasAttribute("data-tilt") && !reduce;

      on(card, "pointermove", ((e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        if (sheen) {
          sheen.style.opacity = "1";
          sheen.style.background = `radial-gradient(420px circle at ${(
            px * 100
          ).toFixed(1)}% ${(py * 100).toFixed(
            1
          )}%, rgba(255,255,255,0.09), transparent 62%)`;
        }
        if (tilt) {
          card.style.transform = `perspective(1000px) rotateY(${(
            (px - 0.5) *
            5
          ).toFixed(2)}deg) rotateX(${(-(py - 0.5) * 5).toFixed(
            2
          )}deg) translateY(-4px)`;
          card.style.borderColor = `color-mix(in srgb, ${accent()} 30%, transparent)`;
        }
      }) as EventListener);

      on(card, "pointerleave", () => {
        if (sheen) sheen.style.opacity = "0";
        if (tilt) {
          card.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)";
          card.style.borderColor = "";
        }
      });
    });

    // --- Marquee pause on hover --------------------------------------------
    const marquee = document.querySelector<HTMLElement>("[data-marquee]");
    if (marquee?.parentElement) {
      const wrap = marquee.parentElement;
      on(wrap, "pointerenter", () => {
        marquee.style.animationPlayState = "paused";
      });
      on(wrap, "pointerleave", () => {
        marquee.style.animationPlayState = "running";
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
