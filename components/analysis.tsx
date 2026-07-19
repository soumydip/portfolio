"use client";

import { useEffect } from "react";
import { initUcoderInsight } from "ucoder-insight";

export default function Analysis() {
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (isProduction) {
      initUcoderInsight("CqebW9thDY");
    }
  }, [isProduction]);

  return null;
}
