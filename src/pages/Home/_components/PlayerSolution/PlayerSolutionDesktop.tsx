import React, { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
    };
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
}

interface Feature {
  iconPath: string;
  text: string;
}

const featuresData: Feature[] = [
  { iconPath: "/player/hand-heart.svg", text: "Cuidado Humano em Cada Passo" },
  {
    iconPath: "/player/shield-check.svg",
    text: "Consultoria que Inspira Confiança",
  },
  { iconPath: "/player/layers.svg", text: "Soluções que se adaptam a você" },
  { iconPath: "/player/cpu.svg", text: "Tecnologia com Propósito" },
];

const PlayerSolutionDesktop: React.FC = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<YTPlayer | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player-desktop", {
        videoId: "bniHzmKwnac",
        events: {
          onReady: () => {
            setIsPlayerReady(true);
            playerRef.current?.mute();
          },
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
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
      <div className="container mx-auto max-w-[1128px]">
        <h2 className="text-2xl lg:text-3xl font-normal text-center mb-16">
          Soluções para cuidar da saúde e da segurança do seu negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-2">
            <div className="flex flex-col space-y-16">
              {featuresData.map((feature, index) => {
                const isActive = index === featuresData.length - 1;
                return (
                  <div
                    key={index}
                    className="relative flex items-center gap-4 w-[360px] h-11"
                  >
                    <div
                      className={`relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                        isActive ? "bg-brand-300" : "bg-brand-300/8"
                      }`}
                    >
                      <img
                        src={feature.iconPath}
                        alt=""
                        className={`w-6 h-6 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-70"
                        }`}
                        aria-hidden="true"
                        draggable={false}
                      />
                    </div>
                    <p className="text-base font-medium transition-colors duration-300 text-brand-300">
                      {feature.text}
                    </p>
                    {index < featuresData.length - 1 && (
                      <div
                        className="absolute left-5 top-13 h-12 w-0 border-l border-dotted border-brand-300/50"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={videoContainerRef}
            className="md:col-span-3 justify-self-end w-full md:w-[744px] h-auto md:h-[448px] aspect-video md:aspect-auto rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div id="yt-player-desktop" className="w-full h-full" />

            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-12 right-4 bg-white text-black px-4 py-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Ativar som do vídeo"
              >
                Ativar Som
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerSolutionDesktop;
