// THIS MAY NEED TO CHANGE TO SERVER
"use client";

import { useEffect } from "react";

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}
