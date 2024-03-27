/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable object-shorthand */
import { type AlgorithmImplementation } from "@/algorithms/Algorithm.type";
import { SortingAlgorithms } from "@/algorithms";

import {
  IoIosPlayCircle,
  IoMdPause,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { BsFillStopCircleFill } from "react-icons/bs";
import { type IconType } from "react-icons";

export const MINDATABARS = 5;
export const MAXDATABARS = 100;
export const DATABARSSTEP = 5;
export const DEFAULTDATABARS = MINDATABARS;
export const MINTIME = 10;
export const MAXTIME = 60;
export const TIMESTEP = 1;
export const DEFAULTTIME = MINTIME;
export const MINDATASPREAD = 50;
export const MAXDATASPREAD = 1000;
export const DATASPREADSTEP = 50;
export const DEFAULTDATASPREAD = MINDATASPREAD;

export const ALGO_IMPLEMENTATION_LIST: {
  [key: string]: AlgorithmImplementation | null;
} = {
  None: null,
  "Selection Sort": SortingAlgorithms.SelectionSort,
  "Bubble Sort": SortingAlgorithms.BubbleSort,
  "Insertion Sort": SortingAlgorithms.InsertionSort,
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
  "Brick Sort": null,
};

export const controlPanelConstants = {
  MINDATABARS: MINDATABARS,
  MAXDATABARS: MAXDATABARS,
  DATABARSSTEP: DATABARSSTEP,
  DEFAULTDATABARS: DEFAULTDATABARS,
  MINTIME: MINTIME,
  MAXTIME: MAXTIME,
  TIMESTEP: TIMESTEP,
  DEFAULTTIME: DEFAULTTIME,
  MINDATASPREAD: MINDATASPREAD,
  MAXDATASPREAD: MAXDATASPREAD,
  DATASPREADSTEP: DATASPREADSTEP,
  DEFAULTDATASPREAD: DEFAULTDATASPREAD,
  ALGOLIST: ALGO_IMPLEMENTATION_LIST,
};

export type controlPanelConstantsType = typeof controlPanelConstants;
export type algorithmListType = typeof ALGO_IMPLEMENTATION_LIST;

interface IReactIcons {
  [key: string]: IconType;
}

export const ReactIcons: IReactIcons = {
  play: IoIosPlayCircle,
  pause: IoMdPause,
  stop: BsFillStopCircleFill,
  forward: IoIosArrowForward,
  backward: IoIosArrowBack,
};
