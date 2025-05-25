import React from "react";

export default function BentoGrid() {
  return (
    <div className="min-h-screen w-full bg-[#23243A] flex items-center justify-center p-4">
      <div
        className="
          grid
          grid-cols-4
          grid-rows-3
          gap-6
          w-full
          max-w-[1400px]
          max-h-[900px]
          h-[90vh]
          relative
        "
      >
        {/* Top-left tall card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-2 flex" />
        {/* Top-center large card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-2 row-span-1" />
        {/* Top-right small card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-1" />

        {/* Middle-left small card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-1" />
        {/* Center (empty, for the circle) */}
        <div className="col-span-2 row-span-1 relative flex items-center justify-center">
          {/* Central circle, overlays the grid */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border-[16px] border-[#23243A] bg-[#23243A] z-10" />
        </div>
        {/* Middle-right tall card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-2" />

        {/* Bottom-left small card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-1" />
        {/* Bottom-center large card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-2 row-span-1" />
        {/* Bottom-right small card */}
        <div className="bg-[#282846] rounded-3xl border border-white/5 col-span-1 row-span-1" />
      </div>
    </div>
  );
}
