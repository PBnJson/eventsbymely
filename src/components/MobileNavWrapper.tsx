"use client";

import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import MobileNav from "./MobileNav";

const MobileNavWrapper = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Simple scroll detection - change nav appearance after scrolling 50px
    setScrolled(latest > 50);
  });

  return <MobileNav scrolled={scrolled} />;
};

export default MobileNavWrapper;
