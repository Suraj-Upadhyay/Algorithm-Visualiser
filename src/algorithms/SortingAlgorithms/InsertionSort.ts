import { type IAlgorithmImplementation } from "../Algorithm.type";

class InsertionSort implements IAlgorithmImplementation {
  currentSortingIndex: number;
  currentSwappingIndex: number;
  done: boolean;

  constructor() {
    this.currentSortingIndex = 1;
    this.currentSwappingIndex = this.currentSortingIndex - 1;
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
    let newIndex = [];
    if (this.currentSortingIndex >= elementArray.length) {
      this.done = true;
      return {
        newIndex: [{ previousIndex: -1, newIndex: -1 }],
        done: this.done,
      };
    }
    const currentSwappingElement = this.getElementAtIndex(
      elementArray,
      this.currentSwappingIndex,
    );
    const currentSwappedElement = this.getElementAtIndex(
      elementArray,
      this.currentSwappingIndex + 1,
    );
    if (
      currentSwappingElement !== undefined &&
      currentSwappedElement !== undefined &&
      currentSwappingElement > currentSwappedElement
    ) {
      newIndex = [
        {
          previousIndex: this.currentSwappingIndex,
          newIndex: this.currentSwappingIndex + 1,
        },
        {
          previousIndex: this.currentSwappingIndex + 1,
          newIndex: this.currentSwappingIndex,
        },
      ];
      if (this.currentSwappingIndex === 0) {
        this.currentSortingIndex++;
        this.currentSwappingIndex = this.currentSortingIndex - 1;
      } else {
        this.currentSwappingIndex--;
      }
      return { newIndex, done: this.done };
    } else if (
      currentSwappingElement !== undefined &&
      currentSwappedElement !== undefined &&
      currentSwappingElement <= currentSwappedElement
    ) {
      this.currentSortingIndex++;
      this.currentSwappingIndex = this.currentSortingIndex - 1;
      return {
        newIndex: [{ previousIndex: -1, newIndex: -1 }],
        done: this.done,
      };
    }
    return { newIndex: [{ previousIndex: -1, newIndex: -1 }], done: this.done };
  }
}

export default InsertionSort;
