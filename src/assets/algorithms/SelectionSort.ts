import { type IAlgorithmImplementation } from "./Algorithm.type";

class SelectionSort implements IAlgorithmImplementation {
  currentSortingIndex: number;
  done: boolean;

  constructor() {
    this.currentSortingIndex = 0;
    this.done = false;
  }

  getElementAtIndex(
    elementArray: Array<{
      data: number;
      index?: number;
    }>,
    index: number,
  ): number | undefined {
    for (let i = 0; i < elementArray.length; i++) {
      if (elementArray[i].index === index) return elementArray[i].data;
    }
  }

  step(
    elementArray: Array<{
      data: number;
      index?: number;
    }>,
  ): {
    newIndex: Array<{
      previousIndex: number;
      newIndex: number;
    }>;
    done: boolean;
  } {
    let minimumIndex = this.currentSortingIndex;
    for (let i = this.currentSortingIndex + 1; i < elementArray.length; i++) {
      const currentElement = this.getElementAtIndex(elementArray, i);
      const minimumElement = this.getElementAtIndex(
        elementArray,
        minimumIndex,
      );
      if (currentElement !== undefined && minimumElement !== undefined && currentElement < minimumElement) {
        minimumIndex = i;
      }
    }
    let newIndex = [];
    if (minimumIndex === this.currentSortingIndex) {
      newIndex = [{ previousIndex: -1, newIndex: -1 }];
    } else {
      newIndex = [
        { previousIndex: this.currentSortingIndex, newIndex: minimumIndex },
        { previousIndex: minimumIndex, newIndex: this.currentSortingIndex },
      ];
    }
    this.currentSortingIndex++;
    if (this.currentSortingIndex >= elementArray.length) this.done = true;
    // eslint-disable-next-line object-shorthand
    return { newIndex: newIndex, done: this.done };
  }
}

export default SelectionSort;
