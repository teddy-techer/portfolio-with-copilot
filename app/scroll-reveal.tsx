"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.remove("scroll-reveal-pending");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    const revealAll = () => {
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal-pending");
        observer.unobserve(element);
      });
    };

    if (motionPreference.matches) {
      revealAll();
      return () => observer.disconnect();
    }

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top <= window.innerHeight) {
        return;
      }

      element.classList.add("scroll-reveal-pending");
      observer.observe(element);
    });

    const handleMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        revealAll();
      }
    };

    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return null;
}
