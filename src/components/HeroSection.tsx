import React, { useState } from 'react';
import { ambientAudio } from '../utils/audio';
import { ArrowRight, Volume2 } from 'lucide-react';
import mobileHeroImg from '../assets/images/mobile_hero_otro_1790268653414.jpg';

interface HeroSectionProps {
  onExploreDrop: () => void;
  onViewLookbook: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDrop,
  onViewLookbook,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => {
    const isNowPlaying = ambientAudio.toggle();
    setIsPlayingAudio(isNowPlaying);
  };

  return (
    <section className="relative w-full border-b border-outline/60 bg-surface">
      <div className="max-w-[1560px] mx-auto px-0 sm:px-8 xl:px-12 py-0 sm:py-8 lg:py-12">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[21/9] min-h-[500px] sm:min-h-[520px] lg:min-h-[580px] max-h-[740px] overflow-hidden bg-surface-subtle group">
          {/* Mobile Image (< md) - Full Bleed Screen Edge to Edge */}
          <img
            alt="OTRO STUDIOS Editorial Look"
            className="md:hidden w-full h-full object-cover object-[center_18%]"
            src={mobileHeroImg}
            loading="eager"
          />

          {/* Desktop Image (>= md) */}
          <img
            alt="OTRO STUDIOS Editorial Campaign"
            className="hidden md:block w-full h-full object-cover object-[center_35%] scale-[1.02] group-hover:scale-100 transition-transform duration-1000 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDqA4LebmAQRECJ-8HW-EKx-Ny7e8kWcEyxqTcwrssEWvU0WzcwuVeAVgO4QYM5qZg-i-RFvtRUnjD-m9_CUedxTwHOXQ3DQGTnwf0hESKYf-d2BCUpJ2J5Es7B8zXovLhkWwjOJAvAOZW6tjHKyr6CU7emN_RhVs5jw9NMru1r9mvYk7qDQ2aWeUoh1CAntHIpDEAzXHvZ-McrPVPNyZPwzQTT4xwuRh98MWDNAl1oaAQhnAOXpcP_EHc4eTUleD"
            loading="eager"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 pointer-events-none"></div>

          {/* Desktop Only: Top Badges */}
          <div className="hidden md:flex absolute top-6 left-6 lg:top-8 lg:left-8 items-center gap-3 z-10">
            <span className="bg-surface/90 backdrop-blur-md text-on-surface font-mono text-[11px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
              RELEASE 004 // PERMANENT COLLECTION
            </span>
            <span className="bg-black/60 backdrop-blur-md text-white font-mono text-[11px] px-3 py-1 uppercase tracking-[0.2em] hidden sm:inline-block">
              LIMITED RUN
            </span>
          </div>

          {/* Desktop Only: Audio Synthesizer Indicator */}
          <div className="hidden md:block absolute top-6 right-6 lg:top-8 lg:right-8 z-10">
            <button
              onClick={toggleSound}
              aria-label="Toggle Sound"
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all ${
                isPlayingAudio
                  ? 'bg-accent text-white ring-2 ring-white/50 animate-pulse'
                  : 'bg-surface/80 text-on-surface hover:bg-surface'
              }`}
              title={isPlayingAudio ? 'Mute Atelier Soundscape' : 'Experience Atelier Soundscape'}
            >
              {isPlayingAudio ? (
                <Volume2 className="w-[18px] h-[18px]" />
              ) : (
                <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
              )}
            </button>
          </div>

          {/* Hero Bottom Statement */}
          <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-12 lg:left-12 lg:right-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 lg:gap-8 z-10">
            <div className="max-w-3xl">
              {/* Desktop Only: Meta tags */}
              <div className="hidden md:flex items-center gap-3 mb-3 text-surface/85 font-mono text-[11px] tracking-[0.25em] uppercase">
                <span>[ARCHITECTURAL SILHOUETTES]</span>
                <span>•</span>
                <span>CUSTOM 480 GSM</span>
              </div>
              <h1 className="font-syne text-[22px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.15] sm:leading-none max-w-xl md:max-w-none">
                WE DON’T FOLLOW TRENDS, WE START THEM.
              </h1>
            </div>

            {/* CTAs (Only these buttons and the statement text are shown on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto mt-1 sm:mt-0">
              <button
                onClick={onExploreDrop}
                className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-surface text-on-surface font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-white transition-all flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
              >
                <span>EXPLORE DROP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onViewLookbook}
                className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.18em] hover:bg-white/30 transition-all flex items-center justify-center cursor-pointer text-center"
              >
                VIEW LOOKBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
