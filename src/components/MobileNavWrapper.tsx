"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

interface MobileNavProps {
  scrolled: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate the horizontal offset for ergonomic thumb reach
  const getThumbOffset = (index: number, total: number) => {
    const middle = (total - 1) / 2;
    const distanceFromMiddle = Math.abs(index - middle);
    const maxOffset = 20; // Maximum pixels to push out

    // Create arc: close at edges, furthest at middle
    const offset = maxOffset - distanceFromMiddle * (maxOffset / middle);
    return Math.round(offset);
  };

  return (
    <div className="md:hidden">
      {/* Container for the button and menu, positioned to the right */}
      <div className="relative flex justify-end">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none p-1 z-30"
          aria-label="Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              color: scrolled ? "#374151" : "white",
              filter: scrolled
                ? "none"
                : "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
              transition: "all 0.3s ease",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu positioned below button with safe spacing */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark backdrop to close menu */}
              <motion.div
                className="fixed inset-0 z-10 bg-black/30"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />

              <motion.div
                className="absolute top-full right-0 mt-2 z-20 space-y-1 min-w-[150px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2 }}
              >
                {siteConfig.navigation.main.map((link, index) => {
                  const thumbOffset = getThumbOffset(
                    index,
                    siteConfig.navigation.main.length
                  );

                  return (
                    <motion.div key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1 text-lg font-medium text-white transition-transform text-right no-underline uppercase tracking-wider"
                        style={{
                          textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          marginRight: `${thumbOffset}px`,
                        }}
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: 30,
                            scale: 1,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            x: 30,
                            scale: 0.8,
                          }}
                          transition={{
                            delay: index * 0.05,
                            duration: 0.1,
                            ease: "easeOut",
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.label}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileNav;
