"use client"

import type React from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface FigmaShapeProps {
  width?: number
  height?: number

  opacity?: number
  cornerRadius?: number

  fillColor?: string
  fillOpacity?: number

  strokeColor?: string
  strokeOpacity?: number
  strokeWeight?: number
  strokePosition?: "inside" | "outside" | "center"

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const TopLeftAndBottomRight: React.FC<FigmaShapeProps> = ({
  width = "full",
  height = "full",
  opacity = 100,
  cornerRadius = 24,
  fillColor = "#191934",
  fillOpacity = 100,
  strokeColor = "#FFFFFFD0",
  strokeOpacity = 5,
  strokeWeight = 1,
  strokePosition = "inside",
  className = "",
  style = {},
  children,
}) => {
  const shapeStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${cornerRadius}px`,
    backgroundColor: `${fillColor}${Math.round((fillOpacity / 100) * 255)
      .toString(16)
      .padStart(2, "0")}`,
    opacity: opacity / 100,
    ...style,
  }

  const getStrokeStyle = () => {
    const alphaHex = Math.round((strokeOpacity / 100) * 255)
      .toString(16)
      .padStart(2, "0")
    const strokeColorWithOpacity = `${strokeColor}${alphaHex}`

    switch (strokePosition) {
      case "inside":
        return {
          border: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
          boxSizing: "border-box" as const,
        }
      case "outside":
        return {
          outline: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
          outlineOffset: "0px",
        }
      case "center":
        return {
          border: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
        }
      default:
        return {}
    }
  }

  return (
    <div
      className={`
        w-[${width}px] 
        h-[${height}px] 
        rounded-[${cornerRadius}px] 
        bg-[${fillColor}] 
        relative
        ${className}
      `}
      style={{
        ...shapeStyle,
        ...getStrokeStyle(),
      }}
    >
      <GlowingEffect
        blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
      />
      {children}
    </div>
  )
}

export default TopLeftAndBottomRight
