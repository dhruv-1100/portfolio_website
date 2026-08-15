"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/site";

/**
 * Copies the address and confirms inline. If the clipboard API is blocked the
 * label still confirms rather than looking dead — the address is also rendered
 * as a plain mailto link nearby.
 */
export default function CopyEmailButton({
  className = "btn btn-accent",
}: {
  className?: string;
}) {
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
      className={className}
      onClick={handleClick}
      data-magnetic
      data-hover
      aria-live="polite"
    >
      {copied ? "copied ✓" : "copy email"}
    </button>
  );
}
