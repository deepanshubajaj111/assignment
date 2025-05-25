import type React from "react"

interface FigmaShapeProps {
  width?: string
  height?: string

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

const SingleRectangle: React.FC<FigmaShapeProps> = ({
  width = "100%",
  height = "100%",
  opacity = 100,
  cornerRadius = 24,
  fillColor = "#1D1D3B",
  fillOpacity = 100,
  strokeColor = "#FFFFFF",
  strokeOpacity = 5,
  strokeWeight = 1,
  strokePosition = "inside",
  className = "",
  style = {},
   children, 
}) => {
  const shapeStyle: React.CSSProperties = {
    width: width,
    height: height,
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
        w-full
        h-full
        rounded-[${cornerRadius}px] 
        bg-[${fillColor}] 
        ${className}
      `}
      style={{
        ...shapeStyle,
        ...getStrokeStyle(),
      }}
    >
      {children}
      </div>
  )
}

interface WideRectangleProps {
  className?: string
  order?: "large-top" | "large-bottom"
  firstChildren?: React.ReactNode;   // <-- Add this line
  secondChildren?: React.ReactNode;
}

export const WideRectangle: React.FC<WideRectangleProps> = ({ className = "", order = "large-top", firstChildren,
  secondChildren, }) => {
  const isLargeTop = order === "large-top"

  return (
    <div className={`w-full h-full flex flex-col gap-[28px] ${className}`}>
      {/* First rectangle */}
      <div className={isLargeTop ? "flex-[0.56] w-full" : "flex-[0.44] w-full"}>
        <SingleRectangle
          width="100%"
          height="100%"
          cornerRadius={24}
          fillColor="#191934"
          strokeColor="#FFFFFF0D"
          strokeOpacity={5}
          strokeWeight={1}
          strokePosition="inside"
        >{firstChildren}</SingleRectangle>
      </div>

      {/* Second rectangle */}
      <div className={isLargeTop ? "flex-[0.44] w-full" : "flex-[0.56] w-full"}>
        <SingleRectangle
          width="100%"
          height="100%"
          cornerRadius={24}
          fillColor="#191934"
          strokeColor="#FFFFFF0D"
          strokeOpacity={5}
          strokeWeight={1}
          strokePosition="inside"
        >{secondChildren}</SingleRectangle>
      </div>
    </div>
  )
}

export default WideRectangle
