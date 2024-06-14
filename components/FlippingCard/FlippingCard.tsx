"use client";
import ReactCardFlip from "react-card-flip";
import React, { ReactNode, useState } from "react";

const FlippingCard = ({
  frontComponent,
  backComponent,
  className,
}: {
  frontComponent: ReactNode;
  backComponent: ReactNode;
  className?: string;
}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardEnter = () => {
    setFlipped(true);
  };

  const handleCardLeave = () => {
    setTimeout(() => {
      setFlipped(false);
    }, 200);
  };

  return (
    <div
      className={`w-full h-full min-w-[300px] ${className}`}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >
      <ReactCardFlip isFlipped={isFlipped}>
        {frontComponent}
        {backComponent}
      </ReactCardFlip>
    </div>
  );
};

export default FlippingCard;
