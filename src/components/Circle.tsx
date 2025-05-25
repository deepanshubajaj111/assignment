import type React from "react";

interface FigmaShapeProps {
  width?: number;
  height?: number;

  opacity?: number;
  cornerRadius?: number;

  fillColor?: string;
  fillOpacity?: number;

  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  strokePosition?: "inside" | "outside" | "center";

  className?: string;
  style?: React.CSSProperties;
}

export const Circle: React.FC<FigmaShapeProps> = ({
  width = 270,
  height = 270,
  opacity = 100,
  cornerRadius = 135,
  fillColor = "#1D1D3B",
  fillOpacity = 100,
  strokeColor = "#FFFFFF",
  strokeOpacity = 5,
  strokeWeight = 1,
  strokePosition = "inside",
  className = "",
  style = {},
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
  };

  const getStrokeStyle = () => {
    const alphaHex = Math.round((strokeOpacity / 100) * 255)
      .toString(16)
      .padStart(2, "0");
    const strokeColorWithOpacity = `${strokeColor}${alphaHex}`;

    switch (strokePosition) {
      case "inside":
        return {
          border: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
          boxSizing: "border-box" as const,
        };
      case "outside":
        return {
          outline: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
          outlineOffset: "0px",
        };
      case "center":
        return {
          border: `${strokeWeight}px solid ${strokeColorWithOpacity}`,
        };
      default:
        return {};
    }
  };

  return (
    <div
      className={`
        w-[${width}px] 
        h-[${height}px] 
        rounded-[${cornerRadius}px] 
        bg-[${fillColor}] 
        ${className}
      `}
      style={{
        ...shapeStyle,
        ...getStrokeStyle(),
      }}
    />
  );
};

export default Circle;
