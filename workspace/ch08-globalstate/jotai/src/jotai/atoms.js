import { atom } from "jotai";

export const counterAtom = atom(0);
export const dateAtom = atom(new Date().toLocaleDateString());
