import { create } from "zustand";

interface GameInfoState {
  totalClicks: number;
  faceUpCardKeys: number[];
  pairedCardKeys: number[];
  addTotalClick: () => void;
  clearTotalClick: () => void;
}

const useGameInfo = create<GameInfoState>((set) => ({
  totalClicks: 0,
  faceUpCardKeys: [],
  pairedCardKeys: [],

  addTotalClick: () =>
    set((state) => ({
      totalClicks: state.totalClicks + 1,
    })),

  clearTotalClick: () =>
    set(() => ({
      totalClicks: 0,
    })),
}));

export default useGameInfo;
