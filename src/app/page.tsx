"use client";

import Image from "next/image";
import "@fontsource/plus-jakarta-sans";
import { People } from "@/components/People";
import "@fontsource/plus-jakarta-sans/600.css";
import { Camera, GitBranch, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import { motion } from "motion/react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTrigger,
  ModalContent,
} from "@/components/ui/animated-modal";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {
  const PlaneIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
      </svg>
    );
  };

  const VacationIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
        <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
        <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
        <path d="M15 9l-3 5.196" />
        <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
      </svg>
    );
  };

  const ElevatorIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
        <path d="M10 10l2 -2l2 2" />
        <path d="M10 14l2 2l2 -2" />
      </svg>
    );
  };

  const FoodIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
      </svg>
    );
  };

  const MicIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
        <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
      </svg>
    );
  };

  const ParachuteIcon = ({ className }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 12a10 10 0 1 0 -20 0" />
        <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
        <path d="M2 12l10 10l-3.5 -10" />
        <path d="M15.5 12l-3.5 10l10 -10" />
      </svg>
    );
  };

  const words = [
    {
      text: "created",
      className: "text-[#B2A1FD]",
    },
    {
      text: "prompts",
      className: "text-[#B2A1FD] dark:text-blue-500",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-[var(--container)] mx-auto w-full py-4 sm:py-6 lg:py-8 px-4 sm:px-6">
      <div className="md:hidden space-y-4">
        <div className="rounded-3xl bg-[radial-gradient(circle_at_50%_105%,_rgb(187,165,244)_0%,_rgb(101,58,216)_100%)] min-h-[400px] flex flex-col">
          <div className="flex-1 flex items-center justify-center py-8">
            <h1 className="text-[#FAF9FF] text-4xl sm:text-5xl font-bold text-center">
              <SparklesText>Template Ai</SparklesText>
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="bg-[var(--main-bg)] w-full h-32 rounded-t-full mx-8">
              <Image
                src="/images/image.png"
                width={150}
                height={150}
                alt=""
                className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="bg-[#653ad8]/30 rounded-2xl p-4">
              <div className="bg-[#110A240] rounded-full h-12 w-12 mb-3 flex p-1">
                <button className="bg-[radial-gradient(circle_at_50%_0%,_#FFDEAD_0%,_#E27F5A_47%,_#691616_100%)] rounded-full w-full flex items-center justify-center">
                  <GitBranch className="text-white w-4 h-4" />
                </button>
              </div>
              <span className="text-[#E6E3FF] text-sm font-bold block">
                Branching paths
              </span>
              <span className="text-[#ACA0E4] text-xs">
                Explore multiple prompt directions.
              </span>
            </div>
            <div className="bg-[#653ad8]/30 rounded-2xl p-4">
              <div className="bg-[#110A240] rounded-full h-12 w-12 mb-3 flex p-1">
                <button className="bg-[radial-gradient(circle_at_50%_0%,_#BBA5F4_0%,_#5F33D6_100%)] rounded-full w-full flex items-center justify-center">
                  <GitBranch className="text-white w-4 h-4" />
                </button>
              </div>
              <span className="text-[#E6E3FF] text-sm font-bold block">
                Ai journey
              </span>
              <span className="text-[#ACA0E4] text-xs">
                Boost your prompt precision.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#191934] bg-[radial-gradient(circle_at_-30vw_24vh,_rgba(127,139,210,0.5)22%,_rgba(89,106,197,0.1)91%)] rounded-3xl p-6 min-h-[200px] flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#F5F1FF_0%,_#6633EE_100%)]">
              25M
            </h2>
            <TypewriterEffectSmooth
              words={words}
              className="!text-sm !leading-6 !font-normal"
            />
          </div>
          <div className="bg-[#191934] bg-[radial-gradient(circle_at_50vw_-12vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 min-h-[200px] flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#FFB266_0%,_#E9766F_49%,_#C04350_100%)]">
              20
            </h2>
            <span className="text-[#B2A1FD] text-sm font-normal mb-4">
              Top Users
            </span>
            <People />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#191934] bg-[radial-gradient(circle_at_30vw_50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 relative">
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
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(45deg,_#FFFFFF_0%,_#AA9CFC_100%)] mb-4">
              Create your own template
            </h2>
            <div className="space-y-2">
              <span className="text-[#E6E3FF] text-lg font-bold block">
                14 days trial
              </span>
              <span className="text-[#ACA0E4] text-base">after – $5/month</span>
            </div>
          </div>

          <div className="bg-[#191934] bg-[radial-gradient(circle_at_50vw_-35vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 flex flex-col items-center space-y-4">
            <div className="bg-[#110A2B40] rounded-full h-16 w-16 flex items-center justify-center">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <Modal>
              <ModalTrigger className="w-full">
                <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none w-full h-12">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_-50%,#BBA5F4_0%,#5F33D6_100%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>Generate</span>
                  </span>
                </button>
              </ModalTrigger>
              <ModalBody className="bg-[#191934]/50 backdrop-blur-sm border-[#E6E3FF]/10">
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-[#E6E3FF] font-bold text-center mb-8">
                    Book your trip to{" "}
                    <span className="px-1 py-0.5 rounded-md bg-[#ACA0E4] border border-[#ffffff0d] text-[var(--main-bg)]">
                      Bali
                    </span>{" "}
                    now! ✈️
                  </h4>
                  <div className="flex justify-center items-center">
                    {images.map((image, idx) => (
                      <motion.div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1 bg-[#E6E3FF] dark:bg-neutral-800 dark:border-neutral-700 border border-[#E6E3FF] shrink-0 overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt="bali images"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                    <div className="flex items-center justify-center">
                      <PlaneIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">
                        5 connecting flights
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">12 hotels</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">
                        69 visiting spots
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <FoodIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">
                        Good food everyday
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">Open Mic</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                      <span className="text-[#E6E3FF] text-sm">
                        Paragliding
                      </span>
                    </div>
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4 bg-[#110A2B40] border-t border-[#E6E3FF]/10">
                  <button className="px-2 py-1 bg-[#E6E3FF] text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-full text-sm w-28">
                    Cancel
                  </button>
                  <InteractiveHoverButton>
                    <span>Book Now</span>
                  </InteractiveHoverButton>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </div>

          <div className="bg-[radial-gradient(circle_at_-30vw_-50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 relative">
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
            <div className="space-y-4">
              <div>
                <span className="text-[#E6E3FF] text-lg font-bold block">
                  Prompt Service
                </span>
                <span className="text-[#ACA0E4] text-base">
                  Use pre-made templates to jumpstart creativity.
                </span>
              </div>
              <div className="space-y-3">
                <InteractiveHoverButton className="bg-[linear-gradient(45deg,_#BBA5F4_0%,_#5F33D6_100%)] w-full">
                  <Camera />
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full">
                  <span>Rewrite</span>
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full">
                  <span>JPG PNG PDF</span>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="bg-[#191934] bg-[radial-gradient(circle_at_30vw_50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 relative min-h-[300px] flex flex-col justify-between">
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
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(45deg,_#FFFFFF_0%,_#AA9CFC_100%)]">
              <TypingAnimation>Create your own template</TypingAnimation>
            </h2>
            <div>
              <span className="text-[#E6E3FF] text-lg font-bold block">
                <TypingAnimation>14 days trial</TypingAnimation>
              </span>
              <span className="text-[#ACA0E4] text-base">
                <TypingAnimation> after – $5/month</TypingAnimation>
              </span>
            </div>
          </div>

          <div className="bg-[radial-gradient(circle_at_50%_105%,_rgb(187,165,244)_0%,_rgb(101,58,216)_100%)] rounded-3xl min-h-[300px] flex flex-col">
            <div className="flex-1 flex items-center justify-center py-6">
              <h1 className="text-[#FAF9FF] text-4xl font-bold text-center">
                <SparklesText>Template Ai</SparklesText>
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="bg-[var(--main-bg)] w-full h-24 rounded-t-full mx-6">
                <Image
                  src="/images/image.png"
                  width={120}
                  height={120}
                  alt=""
                  className="hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#191934] bg-[radial-gradient(circle_at_-30vw_24vh,_rgba(127,139,210,0.5)22%,_rgba(89,106,197,0.1)91%)] rounded-3xl p-6 flex items-center justify-center">
              <div className="bg-[#110A2B40] rounded-full h-16 w-24 flex items-center justify-center">
                <Sparkles className="text-white" />
              </div>
            </div>
            <div className="bg-[#191934] bg-[radial-gradient(circle_at_-30vw_24vh,_rgba(127,139,210,0.5)22%,_rgba(89,106,197,0.1)91%)] rounded-3xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#F5F1FF_0%,_#6633EE_100%)]">
                25M
              </h2>
              <TypewriterEffectSmooth
                words={words}
                className="!text-base !leading-6 !font-normal"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#653ad8]/30 rounded-3xl p-6">
            <div className="space-y-3">
              <div className="bg-[#110A240] rounded-full h-12 w-12 flex p-1">
                <button className="bg-[radial-gradient(circle_at_50%_0%,_#FFDEAD_0%,_#E27F5A_47%,_#691616_100%)] rounded-full w-full flex items-center justify-center">
                  <GitBranch className="text-white w-4 h-4" />
                </button>
              </div>
              <span className="text-[#E6E3FF] text-base font-bold block">
                Branching paths
              </span>
              <span className="text-[#ACA0E4] text-sm">
                Explore multiple prompt directions.
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-[#110A240] rounded-full h-12 w-12 flex p-1">
                <button className="bg-[radial-gradient(circle_at_50%_0%,_#BBA5F4_0%,_#5F33D6_100%)] rounded-full w-full flex items-center justify-center">
                  <GitBranch className="text-white w-4 h-4" />
                </button>
              </div>
              <span className="text-[#E6E3FF] text-base font-bold block">
                Ai journey
              </span>
              <span className="text-[#ACA0E4] text-sm">
                Boost your prompt precision.
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#191934] bg-[radial-gradient(circle_at_50vw_-12vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#FFB266_0%,_#E9766F_49%,_#C04350_100%)]">
                20
              </h2>
              <span className="text-[#B2A1FD] text-base font-normal mb-3">
                Top Users
              </span>
              <People />
            </div>
            <div className="bg-[#191934] bg-[radial-gradient(circle_at_50vw_-35vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 flex items-center justify-center">
              <Modal>
                <ModalTrigger className="w-full">
                  <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none w-full h-12">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_-50%,#BBA5F4_0%,#5F33D6_100%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span>Generate</span>
                    </span>
                  </button>
                </ModalTrigger>
                <ModalBody className="bg-[#191934]/50 backdrop-blur-sm border-[#E6E3FF]/10">
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-[#E6E3FF] font-bold text-center mb-8">
                      Book your trip to{" "}
                      <span className="px-1 py-0.5 rounded-md bg-[#ACA0E4] border border-[#ffffff0d] text-[var(--main-bg)]">
                        Bali
                      </span>{" "}
                      now! ✈️
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-[#E6E3FF] dark:bg-neutral-800 dark:border-neutral-700 border border-[#E6E3FF] shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                      <div className="flex items-center justify-center">
                        <PlaneIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">
                          5 connecting flights
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <ElevatorIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">
                          12 hotels
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <VacationIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">
                          69 visiting spots
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <FoodIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">
                          Good food everyday
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MicIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">Open Mic</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <ParachuteIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                        <span className="text-[#E6E3FF] text-sm">
                          Paragliding
                        </span>
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4 bg-[#110A2B40] border-t border-[#E6E3FF]/10">
                    <button className="px-2 py-1 bg-[#E6E3FF] text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-full text-sm w-28">
                      Cancel
                    </button>
                    <InteractiveHoverButton>
                      <span>Book Now</span>
                    </InteractiveHoverButton>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </div>
          </div>

          <div className="bg-[radial-gradient(circle_at_-30vw_-50vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] rounded-3xl p-6 relative">
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
            <div className="space-y-4">
              <div>
                <span className="text-[#E6E3FF] text-lg font-bold block">
                  <TypingAnimation>Prompt Service</TypingAnimation>
                </span>
                <span className="text-[#ACA0E4] text-base">
                  <TypingAnimation>
                    Use pre-made templates to jumpstart creativity.
                  </TypingAnimation>
                </span>
              </div>
              <div className="space-y-3">
                <InteractiveHoverButton className="bg-[linear-gradient(45deg,_#BBA5F4_0%,_#5F33D6_100%)] w-full">
                  <Camera />
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full">
                  <span>Rewrite</span>
                </InteractiveHoverButton>
                <InteractiveHoverButton className="w-full">
                  <span>JPG PNG PDF</span>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-7 flex-1 h-full">
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
                <div className="col-span-6 row-span-6 rounded-t-3xl flex items-center justify-center">
                  <h1 className="text-[#FAF9FF] text-[62px] leading-[62px] font-bold">
                    <SparklesText>Template Ai</SparklesText>
                  </h1>
                </div>
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
                <div className="col-span-6 row-span-5 rounded-t-3xl items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full">
                  <div className="row-span-1 col-span-4 flex items-center justify-center h-full rounded-tl-3xl bg-[#653ad8]/30"></div>
                  <div className="row-span-1 col-span-8 flex items-center justify-center relative h-full bg-[#653ad8]/30">
                    <div className="flex-1 bg-[var(--main-bg)] w-full h-full rounded-bl-full -mt-[28px] -mr-[14px]"></div>
                  </div>
                </div>
                <div className="col-span-6 row-span-5 rounded-t-3xl items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full">
                  <div className="row-span-1 col-span-8 flex items-center justify-center relative h-full  bg-[#653ad8]/30">
                    <div className="flex-1 bg-[var(--main-bg)] w-full h-full rounded-br-full -mt-[28px] -ml-[14px]"></div>
                  </div>
                  <div className="row-span-1 col-span-4 flex items-center justify-center h-full rounded-tr-3xl bg-[#653ad8]/30"></div>
                </div>
                <div className="col-span-12 row-span-7 rounded-b-3xl items-center justify-cenyter grid grid-cols-12 grid-rows-1 flex-1 h-full gap-x-7">
                  <div className="col-span-6 row-span-1 flex items-center justify-between h-full rounded-b-3xl bg-[#653ad8]/30 p-[25px]">
                    <div className="flex flex-col justify-end h-full">
                      <div className="bg-[#110A240] rounded-full h-[64px] w-[64px] z-20 relative shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] mb-4 before:absolute before:content-[''] before:bg-[#110A240] before:h-[8px] before:w-[35px] before:right-full before:top-1/2 before:-translate-y-1/2 before:shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] before:rounded-full before:-mr-[5px] before:z-10 flex p-[5px]">
                        <button className="bg-[radial-gradient(circle_at_50%_0%,_#FFDEAD_0%,_#E27F5A_47%,_#691616_100%)] rounded-full w-full z-20 flex items-center justify-center">
                          <GitBranch className="text-white" />
                        </button>
                      </div>
                      <span className="text-[#E6E3FF] text-[18px] leading-[28px] font-bold block">
                        <TypingAnimation>Branching paths</TypingAnimation>
                      </span>
                      <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-regular">
                        <TypingAnimation>
                          Explore multiple prompt directions with branching.
                        </TypingAnimation>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 row-span-1 flex items-center justify-between h-full rounded-b-3xl bg-[#653ad8]/30 p-[25px]">
                    <div className="flex flex-col justify-end h-full">
                      <div className="bg-[#110A240] rounded-full h-[64px] w-[64px] z-20 relative shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] mb-4 before:absolute before:content-[''] before:bg-[#110A240] before:h-[8px] before:w-[35px] before:right-full before:top-1/2 before:-translate-y-1/2 before:shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] before:rounded-full before:-mr-[5px] before:z-10 flex p-[5px]">
                        <button className="bg-[radial-gradient(circle_at_50%_0%,_#BBA5F4_0%,_#5F33D6_100%)] rounded-full w-full z-20 flex items-center justify-center">
                          <GitBranch className="text-white" />
                        </button>
                      </div>
                      <span className="text-[#E6E3FF] text-[18px] leading-[28px] font-bold block">
                        <TypingAnimation>Ai journey</TypingAnimation>
                      </span>
                      <span className="text-[#ACA0E4] text-[16px] leading-[24px] font-regular">
                        <TypingAnimation>
                          Boost your prompt precision with keywords.
                        </TypingAnimation>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-12 gap-7 flex-1 h-full">
            <div
              className="h-full row-span-5 rounded-3xl flex items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_-30vw_24vh,_rgba(127,139,210,0.5)22%,_rgba(89,106,197,0.1)91%)] p-[25px]"
            >
              <div className="h-[72px] bg-[#110A2B40] rounded-full shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] w-[132px] py-[12px] px-[8px]">
                <button className="bg-[radial-gradient(circle,_#FFDEAD_0%,_#E27F5A_47%,_#691616_100%)] rounded-full w-[48px] h-full z-20 flex items-center justify-center">
                  <Sparkles className="text-white" />
                </button>
              </div>
            </div>
            <div
              className="h-full row-span-7 rounded-3xl flex items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_-30vw_24vh,_rgba(127,139,210,0.5)22%,_rgba(89,106,197,0.1)91%)] p-[25px]"
            >
              <div className="flex flex-col space-y-4 h-full justify-evenly items-center">
                <h2 className="text-[62px] leading-[56px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#F5F1FF_0%,_#6633EE_100%)]">
                  25M
                </h2>

                <TypewriterEffectSmooth
                  words={words}
                  className="!text-[18px] !leading-[28px] !font-normal"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-1 grid-rows-12 gap-7 flex-1 h-full">
            <div
              className="h-full row-span-7 rounded-3xl flex flex-col items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_50vw_-12vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] p-[25px]"
            >
              <div className="flex flex-col justify-evenly items-center h-full flex-1 gap-2">
                <div className="flex flex-col  space-y-2">
                  <h2 className="text-[62px] leading-[56px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#FFB266_0%,_#E9766F_49%,_#C04350_100%)]">
                    20
                  </h2>
                  <span className="text-[#B2A1FD] text-[18px] leading-[28px] font-normal">
                    Top Users
                  </span>
                </div>
                <div className="">
                  <People />
                </div>
              </div>
            </div>
            <div
              className="h-full row-span-5 rounded-3xl flex items-center justify-center bg-[#191934]
            bg-[radial-gradient(circle_at_50vw_-35vh,_rgba(127,139,210,0.5)_25%,_rgba(89,106,197,0.1)_95%)] p-[25px]"
            >
              <div className="flex items-center justify-center h-full">
                <div className="">
                  <Modal>
                    <ModalTrigger className="h-[72px] bg-[#110A2B40] rounded-full shadow-[inset_0px_1px_3px_0px_rgba(1,5,30,0.5)] w-[198px] py-[12px] px-[8px]">
                      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full h-full">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_-50%,#BBA5F4_0%,#5F33D6_100%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 " />
                          <span>Generate</span>
                        </span>
                      </button>
                    </ModalTrigger>
                    <ModalBody className="bg-[#191934]/50 backdrop-blur-sm border-[#E6E3FF]/10">
                      <ModalContent>
                        <h4 className="text-lg md:text-2xl text-[#E6E3FF] font-bold text-center mb-8">
                          Book your trip to{" "}
                          <span className="px-1 py-0.5 rounded-md bg-[#ACA0E4] border border-[#ffffff0d] text-[var(--main-bg)]">
                            Bali
                          </span>{" "}
                          now! ✈️
                        </h4>
                        <div className="flex justify-center items-center">
                          {images.map((image, idx) => (
                            <motion.div
                              key={"images" + idx}
                              style={{
                                rotate: Math.random() * 20 - 10,
                              }}
                              whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                              }}
                              whileTap={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                              }}
                              className="rounded-xl -mr-4 mt-4 p-1 bg-[#E6E3FF] dark:bg-neutral-800 dark:border-neutral-700 border border-[#E6E3FF] shrink-0 overflow-hidden"
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt="bali images"
                                width="500"
                                height="500"
                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                              />
                            </motion.div>
                          ))}
                        </div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                          <div className="flex  items-center justify-center">
                            <PlaneIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              5 connecting flights
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <ElevatorIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              12 hotels
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <VacationIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              69 visiting spots
                            </span>
                          </div>
                          <div className="flex  items-center justify-center">
                            <FoodIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              Good food everyday
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <MicIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              Open Mic
                            </span>
                          </div>
                          <div className="flex items-center justify-center">
                            <ParachuteIcon className="mr-1 text-[#E6E3FF] h-4 w-4" />
                            <span className="text-[#E6E3FF] text-sm">
                              Paragliding
                            </span>
                          </div>
                        </div>
                      </ModalContent>
                      <ModalFooter className="gap-4 bg-[#110A2B40] border-t border-[#E6E3FF]/10">
                        <button className="px-2 py-1 bg-[#E6E3FF] text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-full text-sm w-28">
                          Cancel
                        </button>

                        <InteractiveHoverButton>
                          <span>Book Now</span>
                        </InteractiveHoverButton>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
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
