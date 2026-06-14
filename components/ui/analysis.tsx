"use client";

import { useEffect } from "react";
import { initUcoderInsight } from "ucoder-insight";

export default function Analysis() {
  useEffect(() => {
    initUcoderInsight("CqebW9thDY");
  }, []);
  return null;
}
