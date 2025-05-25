"use client";

import { TopLeftAndBottomRight } from "./TopLeftAndBottomRight";
import WideRectangle from "./BottomLeftGroup";
import { ArchRectangle } from "./ArchRectangle";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SpinningText } from "./magicui/spinning-text";
import Image from "next/image";
import { People } from "./People";

export function TypewriterEffectSmoothDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}

const Grid = () => {
  const words = [
    {
      text: "Template",
    },
    {
      text: "Ai",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="relative w-full min-h-screen py-4 sm:py-6 lg:py-8 px-0">
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-4 lg:gap-6 xl:gap-7 h-full min-h-[calc(100vh-4rem)]">
        <TopLeftAndBottomRight>
          <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
            <h2
              className="
                block w-full text-left font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-2xl lg:text-3xl xl:text-[36px] leading-tight lg:leading-[40px] tracking-[-0.02em]
                bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent inline-block
                select-text pointer-events-auto
              "
            >
              Create your own template
            </h2>
            <div className="flex flex-col">
              <span
                className="block w-full text-left font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[-0.02em]
                bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent inline-block
                select-text pointer-events-auto"
              >
                14 days trial
              </span>
              <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-['Plus_Jakarta_Sans',sans-serif]">
                after – $5/month
              </span>
            </div>
          </div>
        </TopLeftAndBottomRight>

        <span className="col-span-2">
          <ArchRectangle>
            <div>
              <h2 className="block w-full text-center font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-3xl lg:text-5xl xl:text-[62px] leading-tight lg:leading-[62px] tracking-[-0.02em] text-[#FAF9FF] select-text pointer-events-auto">
                <TypewriterEffectSmooth words={words} />
              </h2>
            </div>
          </ArchRectangle>
        </span>

        <WideRectangle
          order="large-bottom"
          firstChildren={
            <div className="p-[32px] flex h-full w-full items-center justify-center">
              <button
                className={`relative w-[132px] h-[72px] rounded-full flex items-center justify-center font-semibold text-lg bg-black/15 border border-solid border-[rgba(91,75,185,0.45)] shadow-[inset_0_4px_16px_0_rgba(91,75,185,0.25)] overflow-hidden select-none transition`}
                style={{
                  boxShadow: "inset 0 4px 16px 0 rgba(91,75,185,0.25)",
                }}
              >
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(91,75,185,0.23) 0%, transparent 80%)",
                    opacity: 1,
                    zIndex: 1,
                  }}
                />
                <span className="relative z-10 text-white flex w-full">
                  <Image
                    src="/images/button.png"
                    alt="Plus Icon"
                    width={82}
                    height={82}
                    className="inline-block mr-auto"
                  />
                </span>
              </button>
            </div>
          }
          secondChildren={
            <div className="p-[32px] flex h-full w-full items-center justify-center">
              <div className="flex flex-col gap-2">
                <h2
                  className="block text-center w-full text-left font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-2xl lg:text-3xl xl:text-[36px] leading-tight lg:leading-[40px] tracking-[-0.02em]
                bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent inline-block
                select-text pointer-events-auto"
                >
                  25M
                </h2>
                <div className="text-[#B2A1FD]">created prompts</div>
              </div>
            </div>
          }
        />

        <WideRectangle
          order="large-top"
          firstChildren={
            <div className="p-[32px] flex h-full w-full items-center flex-col justify-between">
              <div className="space-y-1">
                {" "}
                <h2
                  className="
    bg-gradient-to-r
    from-[#FFB266]
    via-[#E9766F]
    to-[#C04350]
    bg-clip-text
    text-transparent
    inline-block
    font-semibold
    text-[62px] leading-[56px] font-['Plus_Jakarta_Sans',sans-serif]
  "
                >
                  20
                </h2>
                <span className="block text-[#B2A1FD] text-[18px] leading-[28px] font-['Plus_Jakarta_Sans',sans-serif]">
                  Top Users
                </span>
              </div>

              <People />
            </div>
          }
          secondChildren={
            <div className="text-white text-xl">
              <div className="p-[32px] flex h-full w-full items-center justify-center">
                {" "}
                <button>Generate</button>
              </div>
            </div>
          }
        />

        <span className="col-span-2">
          <ArchRectangle mirrorVertical splitVertical />
        </span>

        <TopLeftAndBottomRight>
          <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <span
                className="block w-full text-left font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[-0.02em]
                bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent inline-block
                select-text pointer-events-auto"
              >
                Prompt Service
              </span>
              <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-['Plus_Jakarta_Sans',sans-serif]">
                Use pre-made templates to jumpstart creativity.
              </span>
            </div>
          </div>
        </TopLeftAndBottomRight>
      </div>
      <Image
        src="/images/image.png"
        alt="Center"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-[270px] xl:h-[270px]"
        style={{ pointerEvents: "none" }}
        width={270}
        height={270}
      />
      <SpinningText
        radius={22}
        className="absolute top-1/2 left-1/2 text-white text-xs bg-red"
      >
        0101010 • 0101010 • 0101010 • 0101010 • 0101010 • 0101010 •
      </SpinningText>
      ;
    </div>
  );
};

export default Grid;
