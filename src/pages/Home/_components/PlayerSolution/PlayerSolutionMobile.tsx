import { useState, useEffect, useRef } from "react";

interface YTPlayerProps {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          events?: {
            onReady?: (event: { target: YTPlayerProps }) => void;
          };
        }
      ) => YTPlayerProps;
    };
  }
}

interface FeatureProps {
  icon: string;
  text: string;
}

const featuresData: FeatureProps[] = [
  {
    icon: "/player/hand-heart.svg",
    text: "Cuidado Humano em Cada Passo",
  },
  {
    icon: "/player/shield-check.svg",
    text: "Consultoria que Inspira Confiança",
  },
  { icon: "/player/layers.svg", text: "Soluções que se adaptam a você" },
  { icon: "/player/cpu.svg", text: "Tecnologia com Propósito" },
];

const PlayerSolutionMobile = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<YTPlayerProps | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player-mobile", {
        videoId: "bniHzmKwnac",
        events: {
          onReady: () => {
            setIsPlayerReady(true);
            playerRef.current?.mute();
          },
        },
      }) as YTPlayerProps;
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
    <section className="bg-[linear-gradient(250deg,_#044019_0%,_#00290E_100%)] text-white py-20 md:py-24">
      <div className="px-4 flex flex-col items-center">
        <h2 className="w-[328px] text-2xl text-center mb-12">
          Soluções para cuidar da saúde e da segurança do seu negócio
        </h2>

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

        <div className="flex flex-col space-y-16 items-start mt-16 w-full max-w-[600px]">
          {featuresData.map((feature, index) => {
            const isActive = index === featuresData.length - 1;

            return (
              <div
                key={index}
                className="relative flex items-center gap-4 h-11"
              >
                <div
                  className={`relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                    isActive ? "bg-brand-300" : "bg-brand-300/8"
                  }`}
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? "" : ""
                    }`}
                  />
                </div>
                <p className="text-base font-medium transition-colors duration-300 text-brand-300">
                  {feature.text}
                </p>
                {index < featuresData.length - 1 && (
                  <div
                    className="absolute left-5 top-12 h-14 w-0 border-l border-dotted border-brand-300/50"
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
