import { create } from "zustand";

const useCounterState = create((set, get) => ({
  count: 6,
  countUp: (step) => {
    set({ count: get().count + step });
  },
  countDown: (step) => {
    set({ count: get().count - step });
  },
  countReset: () => set({ count: 0 }),
}));

export default useCounterState;
