"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/site";

/**
 * Copies the address to the clipboard and confirms inline. If the clipboard
 * API is blocked the label still confirms, so the button never looks dead —
 * the address is also rendered as a mailto link alongside it.
 */
export default function CopyEmailButton({ label = "copy email" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard unavailable (insecure context or denied permission).
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`btn-primary${copied ? " is-copied" : ""}`}
      aria-live="polite"
    >
      {copied ? "copied ✓" : label}
    </button>
  );
}
