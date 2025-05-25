// import FigmaShape from "@/components/figma-shape";
"use client"
// import Circle from "@/components/Circle";
import Grid from "@/components/Grid";
import { Vortex } from "@/components/ui/vortex";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
// or for a specific weight:
import "@fontsource/plus-jakarta-sans/600.css"; // For 600 weight


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-0">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Grid />
      </Vortex>
    </div>
  );
}
