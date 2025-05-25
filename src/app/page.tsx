"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/600.css";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[var(--container)] mx-auto w-full py-[32px]">
      <div className="grid grid-cols-4 grid-rows-2 gap-7 flex-1 h-full">
        <div
          className="h-full rounded-3xl flex items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_30vw_50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] relative p-[25px]"
        >
          <BorderBeam
            duration={6}
            size={50}
            className="from-transparent via-[#D37252] to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={50}
            className="from-transparent via-[#563EEA] to-transparent"
          />
          <div className="flex flex-1 flex-col justify-between gap-4 h-full">
            <h2 className="text-[32px] leading-[40px] font-semibold inline-block text-transparent bg-clip-text bg-[linear-gradient(45deg,_#FFFFFF_0%,_#AA9CFC_100%)] hover:bg-[linear-gradient(45deg,_#AA9CFC_0%,_#FFFFFF_100%)] transition-all duration-300">
              <TypingAnimation>Create your own template</TypingAnimation>
            </h2>
            <div className="flex flex-col">
              <span className="text-[#E6E3FF] text-[18px] leading-[28px] font-bold block">
                <TypingAnimation>14 days trial</TypingAnimation>
              </span>
              <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-regular">
                <TypingAnimation> after – $5/month</TypingAnimation>
              </span>
            </div>
          </div>
        </div>
        <div className="h-full rounded-3xl flex items-center justify-center col-span-2 row-span-2 relative">
          <div className="grid grid-col-1 grid-rows-12 gap-7 flex-1 h-full">
            <div className="bg-[radial-gradient(circle_at_50%_105%,_rgb(187,165,244)_0%,_rgb(101,58,216)_100%)] row-span-6 rounded-3xl flex item-center justify-center">
              <div className="grid grid-cols-6 grid-rows-12 flex-1 h-full">
                <div className="col-span-6 row-span-6 rounded-t-3xl flex items-center justify-center"></div>
                <div className="col-span-1 row-span-6 rounded-b-3xl flex items-center justify-center"></div>
                <div className="col-span-4 row-span-6 flex items-center justify-center relative">
                  <div className="flex-1 bg-[var(--main-bg)]  w-full h-full rounded-t-full rounded-br-3xl -mb-[28px]">
                    <Image
                      src="/images/image.png"
                      width={300}
                      height={300}
                      alt=""
                      className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-50"
                    />
                  </div>
                </div>
                <div className=" col-span-1 row-span-6 rounded-b-3xl flex items-center justify-center"></div>
              </div>
            </div>
            <div className="row-span-6 rounded-3xl flex item-center justify-center">
              <div className="grid grid-cols-12 grid-rows-12 flex-1 h-full gap-x-7 relative">
                <div className="col-span-6 row-span-5 rounded-t-3xl flex items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full">
                  <div className="row-span-1 col-span-4 bg-[var(--bg-main)] flex items-center justify-center h-full rounded-tl-3xl bg-[#653ad8]/30"></div>
                  <div className="row-span-1 col-span-8 flex items-center justify-center relative h-full bg-[var(--bg-main)] bg-[#653ad8]/30">
                    <div className="flex-1 bg-[var(--main-bg)] w-full h-full rounded-bl-full -mt-[28px] -mr-[14px]"></div>
                  </div>
                </div>
                <div className="col-span-6 row-span-5 rounded-t-3xl flex items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full">
                  <div className="row-span-1 col-span-8 flex items-center justify-center relative h-full bg-[var(--bg-main)] bg-[#653ad8]/30">
                    <div className="flex-1 bg-[var(--main-bg)] w-full h-full rounded-br-full -mt-[28px] -ml-[14px]"></div>
                  </div>
                  <div className="row-span-1 col-span-4 bg-[var(--bg-main)] flex items-center justify-center h-full rounded-tr-3xl bg-[#653ad8]/30"></div>
                </div>
                <div className="col-span-12 row-span-7 rounded-b-3xl flex items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full gap-x-7">
                  <div className="bg-[var(--bg-main)] col-span-6 row-span-1 flex items-center justify-between h-full rounded-b-3xl bg-[#653ad8]/30"></div>
                  <div className="bg-[var(--bg-main)] col-span-6 row-span-1 flex items-center justify-between h-full rounded-b-3xl bg-[#653ad8]/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-12 gap-7 flex-1 h-full">
            <div className="bg-white h-full row-span-5 rounded-3xl flex items-center justify-center">
              hi3
            </div>
            <div className="bg-white h-full row-span-7 rounded-3xl flex items-center justify-center">
              hi4
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-12 gap-7 flex-1 h-full">
            <div
              className=" h-full row-span-7 rounded-3xl flex items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_50vw_-12vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] p-[25px]"
            >
              hi5
            </div>
            <div className="bg-white h-full row-span-5 rounded-3xl flex items-center justify-center">
              hi6
            </div>
          </div>
        </div>
        {/* <div className="bg-white h-full rounded-3xl flex items-center justify-center col-span-2">
          hi5
        </div> */}
        <div
          className="h-full rounded-3xl flex items-center justify-center
            bg-[radial-gradient(circle_at_-30vw_-50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] relative p-[25px]"
        >
          <BorderBeam
            duration={6}
            size={50}
            className="from-transparent via-[#D37252] to-transparent"
            reverse
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={50}
            className="from-transparent via-[#563EEA] to-transparent"
            reverse
          />
          <div className="flex flex-1 flex-col justify-between gap-4 h-full">
            <div className="flex flex-col">
              <span className="text-[#E6E3FF] text-[18px] leading-[28px] font-bold block">
                <TypingAnimation>Prompt Service</TypingAnimation>
              </span>
              <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-regular">
                <TypingAnimation>
                  Use pre-made templates to jumpstart creativity.
                </TypingAnimation>
              </span>
            </div>
            <div className="space-y-4">
              <InteractiveHoverButton className="bg-[linear-gradient(45deg,_#BBA5F4_0%,_#5F33D6_100%)] block">
                <span>
                  <Camera />
                </span>
              </InteractiveHoverButton>
              <InteractiveHoverButton>
                <span>Rewrite</span>
              </InteractiveHoverButton>
              <InteractiveHoverButton>
                <span>JPG PNG PDF</span>
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
