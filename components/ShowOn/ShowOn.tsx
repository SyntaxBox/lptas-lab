"use client";
import React, { useEffect, useRef, useState } from "react";

function ShowOn({ on, children }: { on: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const { top } = rect;
        setCurrentHeight(top);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array
  return (
    <div ref={ref}>{currentHeight && currentHeight < on ? children : ""}</div>
  );
}

export default ShowOn;
