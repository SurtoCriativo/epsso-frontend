import React, { useState, useEffect, useRef } from "react";
import { HandHeart, ShieldCheck, Layers, Cpu } from "lucide-react";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
}

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const featuresData: Feature[] = [
  { icon: HandHeart, text: "Cuidado Humano em Cada Passo" },
  { icon: ShieldCheck, text: "Consultoria que Inspira Confiança" },
  { icon: Layers, text: "Soluções que se adaptam a você" },
  { icon: Cpu, text: "Tecnologia com Propósito" },
];

const PlayerSolutionMobile = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<YTPlayer | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player-mobile", {
        videoId: "dQw4w9WgXcQ",
        events: {
          onReady: () => {
            setIsPlayerReady(true);
            playerRef.current?.mute();
          },
        },
      }) as YTPlayer;
    };
  }, []);

  useEffect(() => {
    if (!videoContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isPlayerReady && playerRef.current) {
          if (entry.isIntersecting) {
            playerRef.current.playVideo();
          } else {
            playerRef.current.pauseVideo();
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoContainerRef.current);

    return () => observer.disconnect();
  }, [isPlayerReady]);

  const handleUnmute = () => {
    if (playerRef.current) {
      playerRef.current.unMute();
      setIsMuted(false);
    }
  };

  return (
    <section className="bg-[linear-gradient(250deg,_#044019_0%,_#00290E_100%)] text-white py-16 md:py-24">
      <div className="px-4 flex flex-col items-center">
        {/* Título Centralizado */}
        <h2 className="w-[328px] text-2xl text-center mb-12">
          Soluções para cuidar da saúde e da segurança do seu negócio
        </h2>

        {/* Player Alinhado no Padding */}
        <div
          ref={videoContainerRef}
          className="w-full aspect-video max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div id="yt-player-mobile" className="w-full h-full"></div>

          {isMuted && (
            <button
              onClick={handleUnmute}
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Ativar som do vídeo"
            >
              Ativar Som
            </button>
          )}
        </div>

        {/* Lista de Features Alinhadas no Padding */}
        <div className="flex flex-col space-y-16 items-start mt-16 w-full max-w-[600px]">
          {featuresData.map((feature, index) => {
            const isActive = index === featuresData.length - 1;
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="relative flex items-center gap-4 h-11"
              >
                <div
                  className={`relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isActive ? "bg-green-400" : "bg-brand-300/8"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-green-900" : "text-brand-300"
                    }`}
                  />
                </div>
                <p className="text-base font-medium transition-colors duration-300 text-brand-300">
                  {feature.text}
                </p>
                {index < featuresData.length - 1 && (
                  <div
                    className="absolute left-5 top-full h-16 w-0 border-l border-dotted border-brand-300/50"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlayerSolutionMobile;
