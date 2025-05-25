"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

interface ArchRectangleProps {
  cornerRadius?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  className?: string;
  mirrorVertical?: boolean;
  splitVertical?: boolean;
  splitGap?: number;
  splitInnerRadius?: number;
  children?: ReactNode; // <-- Add this for custom content
}

export const ArchRectangle: React.FC<ArchRectangleProps> = ({
  cornerRadius = 24,
  fillColor = "#191934",
  strokeColor = "#FFFFFFD0",
  strokeOpacity = 19,
  strokeWidth = 1,
  className = "",
  mirrorVertical = false,
  splitVertical = false,
  splitGap = 28,
  splitInnerRadius = 12,
  children, // <-- Add this for custom content
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 556, height: 396 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxArchRadius = Math.min(
    dimensions.width * 0.28,
    dimensions.height * 0.4
  );
  const archRadius = Math.max(60, maxArchRadius);

  const centerX = dimensions.width / 2;
  const transitionRadius = cornerRadius;
  const leftArchPoint = centerX - archRadius;
  const rightArchPoint = centerX + archRadius;

  const gap = splitVertical ? splitGap : 0;
  const halfWidth = dimensions.width / 2 - gap / 2;

  return (
    
    <>
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>   
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        style={{
          transform: mirrorVertical ? "scaleY(-1)" : "none",
          transformOrigin: "center",
        }}
      >
        
        <defs>
          <clipPath id="arch-clip">
            <path
              d={`
                M 0 0
                L ${dimensions.width} 0
                L ${dimensions.width} ${dimensions.height}
                L ${rightArchPoint + transitionRadius} ${dimensions.height}
                Q ${rightArchPoint} ${dimensions.height} ${rightArchPoint} ${
                dimensions.height - transitionRadius
              }
                A ${archRadius - transitionRadius} ${
                archRadius - transitionRadius
              } 0 0 0 ${leftArchPoint} ${dimensions.height - transitionRadius}
                Q ${leftArchPoint} ${dimensions.height} ${
                leftArchPoint - transitionRadius
              } ${dimensions.height}
                L 0 ${dimensions.height}
                Z
              `}
              fill="white"
            />
          </clipPath>
          <pattern
            id="pattern-dots"
            patternUnits="userSpaceOnUse"
            width="164"
            height="164"
          >
            <image
              href="/images/6X6_dot.png"
              x="0"
              y="0"
              width="6"
              height="6"
            />
          </pattern>
          <pattern
            id="pattern-grain"
            patternUnits="userSpaceOnUse"
            width="236"
            height="236"
          >
            <image
              href="/images/grain.png"
              x="0"
              y="0"
              width="236"
              height="236"
            />
          </pattern>
          {!splitVertical && (
            <radialGradient id="radial-fill" cx="50%" cy="80%" r="50%">
              <stop offset="0%" stopColor="#BBA5F4" stopOpacity="1" />
              <stop offset="100%" stopColor="#653AD8" stopOpacity="0.8" />
            </radialGradient>
          )}
        </defs>

        {!splitVertical ? (
          <>
            <rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill={fillColor}
              stroke={strokeColor}
              strokeOpacity={strokeOpacity / 100}
              strokeWidth={strokeWidth}
              clipPath="url(#arch-clip)"
            />
            <rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill="url(#pattern-dots)"
              opacity="0.7"
              clipPath="url(#arch-clip)"
            />
            <rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill="url(#pattern-grain)"
              opacity="0.15"
              clipPath="url(#arch-clip)"
            />
            <rect
              x="0"
              y="0"
              width={dimensions.width}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill="url(#radial-fill)"
              opacity="1"
              clipPath="url(#arch-clip)"
            />
          </>
        ) : (
          <>
          
            <rect
              x="0"
              y="0"
              width={halfWidth}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill={fillColor}
              stroke={strokeColor}
              strokeOpacity={strokeOpacity / 100}
              strokeWidth={strokeWidth}
              clipPath="url(#arch-clip)"
            />
            
            <rect
              x={centerX + gap / 2}
              y="0"
              width={halfWidth}
              height={dimensions.height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill={fillColor}
              stroke={strokeColor}
              strokeOpacity={strokeOpacity / 100}
              strokeWidth={strokeWidth}
              clipPath="url(#arch-clip)"
            />
          </>
        )}
      </svg>
      
      <div className="absolute inset-0 flex p-[32px] justify-center pointer-events-none">
        
        <div className="text-white text-center pointer-events-auto">
          
          {children}
        </div>
      </div>
    </div>
    </>
  );
};
