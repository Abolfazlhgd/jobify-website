"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

export default function IranNetworkWarning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("clerk-warning-dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("clerk-warning-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-amber-500 text-amber-950 px-4 py-2.5 text-center text-sm font-medium flex items-center justify-center gap-x-2 relative animate-in fade-in slide-in-from-top duration-300 z-50">
      <AlertTriangle className="w-4 h-4 shrink-0" />
      <span>
        <strong>Connection Notice:</strong> If the authentication or login panel
        fails to load (Clerk API timeout), please enable your{" "}
        <strong>VPN / Proxy tool</strong> and refresh the page.
      </span>
      <button
        onClick={handleDismiss}
        className="absolute right-4 hover:opacity-70 p-1 rounded transition-opacity"
        aria-label="Close warning"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
