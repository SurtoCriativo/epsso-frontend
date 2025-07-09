// PlayerSolution.tsx
import PlayerSolutionDesktop from "./PlayerSolutionDesktop";
import PlayerSolutionMobile from "./PlayerSolutionMobile";
import { useMediaQuery } from "usehooks-ts";

export const PlayerSolution = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)"); // até lg no Tailwind

  return isMobile ? <PlayerSolutionMobile /> : <PlayerSolutionDesktop />;
};

export default PlayerSolution;
