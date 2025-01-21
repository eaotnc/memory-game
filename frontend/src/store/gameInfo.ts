import { create } from "zustand";

interface GameInfoState {
  totalClicks: number;
  faceUpCardKeys: number[];
  pairedCardKeys: number[];
  addTotalClick: () => void;
  clearTotalClick: () => void;
  handleGameLogic: (key: number, id: number) => void;
}
const handleGameLogicReducer = (
  state: GameInfoState,
  key: number,
  id: number
) => {
  const { faceUpCardKeys } = state;
  if (faceUpCardKeys.length < 2) {
    return {
      faceUpCardKeys: [...faceUpCardKeys, key],
    };
  }
  if (state.faceUpCardKeys.length === 2) {
    return {
      faceUpCardKeys: [key],
    };
  }
  return { faceUpCardKeys: state.faceUpCardKeys };
};

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

  handleGameLogic: (key: number, id: number) => {
    set((state) => handleGameLogicReducer(state, key, id));
  },
}));

export default useGameInfo;
