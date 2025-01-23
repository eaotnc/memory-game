import { create } from "zustand";

interface FaceUpCardType {
  index: number;
  id: number;
}

interface PairedCardType {
  index: number;
  id: number;
}

interface HandleGameLogicReducerType {
  state: GameControllerState;
  index: number;
  id: number;
}

const handleGameLogicReducer = ({
  state,
  index,
  id,
}: HandleGameLogicReducerType) => {
  const { faceUpCards } = state;

  switch (faceUpCards.length) {
    case 0:
      return {
        faceUpCards: [...faceUpCards, { index, id }],
      };
    case 1:
      if (faceUpCards[0].id === id) {
        return {
          faceUpCards: [],
          pairedCards: [...state.pairedCards, ...faceUpCards, { index, id }],
        };
      }
      return {
        faceUpCards: [...faceUpCards, { index, id }],
      };
    case 2:
      return {
        faceUpCards: [{ index, id }],
      };
    default:
      return { faceUpCards: state.faceUpCards };
  }
};

interface GameControllerState {
  isWin: boolean;
  isStart: boolean;
  playingTimeInSeconds: number;
  totalClicks: number;
  faceUpCards: FaceUpCardType[];
  pairedCards: PairedCardType[];
  addTotalClick: () => void;
  clearTotalClick: () => void;
  handleGameLogic: (index: number, id: number) => void;
  setRestart: () => void;
  setGameStart: () => void;
  setGameEnd: () => void;
  setWinGame: () => void;
  addTime: () => void;
  removeFaceUpCards: (index: number) => void;
}

const initialState = {
  isWin: false,
  isStart: false,
  playingTimeInSeconds: 0,
  totalClicks: 0,
  faceUpCards: [],
  pairedCards: [],
};

const useGameController = create<GameControllerState>((set) => ({
  ...initialState,

  addTotalClick: () =>
    set((state) => ({
      totalClicks: state.totalClicks + 1,
    })),

  clearTotalClick: () =>
    set(() => ({
      totalClicks: 0,
    })),

  handleGameLogic: (index: number, id: number) => {
    set((state) => handleGameLogicReducer({ state, index, id }));
  },

  setRestart: () => {
    set(() => ({
      ...initialState,
    }));
  },

  setGameStart: () => {
    set(() => ({
      isStart: true,
    }));
  },

  setGameEnd: () => {
    set(() => ({
      isStart: false,
    }));
  },

  setWinGame: () => {
    set(() => ({
      isWin: true,
      isStart: false,
    }));
  },

  addTime: () => {
    set((state) => ({
      playingTimeInSeconds: state.playingTimeInSeconds + 1,
    }));
  },

  removeFaceUpCards: (index: number) =>
    set((state) => ({
      faceUpCards: state.faceUpCards.filter((card) => card.index !== index),
    })),
}));

export default useGameController;
