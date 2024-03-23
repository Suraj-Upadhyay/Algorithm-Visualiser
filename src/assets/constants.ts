import { AlgorithmImplementation } from "./algorithms/Algorithm.type";
import { SelectionSort } from "./algorithms/index";

export const MINDATABARS = 5;
export const MAXDATABARS = 100;
export const DEFAULTDATABARS = MINDATABARS;
export const MINTIME = 10;
export const MAXTIME = 60;
export const DEFAULTTIME = MINTIME;
export const MINDATASPREAD = 50;
export const MAXDATASPREAD = 1000;
export const DEFAULTDATASPREAD = MINDATASPREAD;

export const ALGO_IMPLEMENTATION_LIST: {
  [key: string]: AlgorithmImplementation | null;
} = {
  None: null,
  "Selection Sort": SelectionSort,
  "Bubble Sort": null,
  "Insertion Sort": null,
  "Merge Sort": null,
  "Quick Sort": null,
  "Heap Sort": null,
  "Counting Sort": null,
  "Radix Sort": null,
  "Bucket Sort": null,
  "Bingo Sort": null,
  "Shell Sort": null,
  "Tim Sort": null,
  "Comb Sort": null,
  "Pigeonhole Sort": null,
  "Cycle Sort": null,
  "Cocktail Sort": null,
  "Strand Sort": null,
  "Bitonic Sort": null,
  "Pancake Sort": null,
  "Permutation Sort": null,
  "Gnome Sort": null,
  "Sleep Sort": null,
  "Stooge Sort": null,
  "Tree Sort": null,
  "Brick Sort": null
};

export const controlPanelConstants = {
  MINDATABARS: MINDATABARS,
  MAXDATABARS: MAXDATABARS,
  DEFAULTDATABARS: DEFAULTDATABARS,
  MINTIME: MINTIME,
  MAXTIME: MAXTIME,
  DEFAULTTIME: DEFAULTTIME,
  MINDATASPREAD: MINDATASPREAD,
  MAXDATASPREAD: MAXDATASPREAD,
  DEFAULTDATASPREAD: DEFAULTDATASPREAD,
  ALGOLIST: ALGO_IMPLEMENTATION_LIST
};

export type controlPanelConstantsType = typeof controlPanelConstants;
export type algorithmListType = typeof ALGO_IMPLEMENTATION_LIST;

export const googleIconTexts = {
  play: "play_circle",
  pause: "pause",
  forward: "arrow_forward_ios",
  backward: "arrow_back_ios"
};
