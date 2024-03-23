import { IAlgorithmImplementation } from "./Algorithm.type";

class SelectionSort implements IAlgorithmImplementation {
  currentSortingIndex: number;
  done: boolean;

  constructor() {
    this.currentSortingIndex = 0;
    this.done = false;
  }

  getElementAtIndex(
    elementArray: {
      data: number;
      index?: number;
    }[],
    index: number
  ) {
    for (let i = 0; i < elementArray.length; i++) {
      if (elementArray[i].index === index) return elementArray[i].data;
    }
  }

  step(
    elementArray: {
      data: number;
      index?: number;
    }[]
  ) {
    let minimum_index = this.currentSortingIndex;
    for (let i = this.currentSortingIndex + 1; i < elementArray.length; i++) {
      const currentElement = this.getElementAtIndex(elementArray, i);
      const minimumElement = this.getElementAtIndex(
        elementArray,
        minimum_index
      );
      if (currentElement && minimumElement && currentElement < minimumElement) {
        minimum_index = i;
      }
    }
    let newIndex = [];
    if (minimum_index === this.currentSortingIndex) {
      newIndex = [{ previousIndex: -1, newIndex: -1 }];
    } else {
      newIndex = [
        { previousIndex: this.currentSortingIndex, newIndex: minimum_index },
        { previousIndex: minimum_index, newIndex: this.currentSortingIndex }
      ];
    }
    this.currentSortingIndex++;
    if (this.currentSortingIndex >= elementArray.length) this.done = true;
    return { newIndex: newIndex, done: this.done };
  }
}

export default SelectionSort;
