import { type IAlgorithmImplementation } from "@/algorithms/Algorithm.type";

class BubbleSort implements IAlgorithmImplementation {
  currentSortedElements: number;
  currentSortingIndex: number;
  done: boolean;

  constructor() {
    this.currentSortedElements = 0;
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
    if (this.done || this.currentSortedElements >= elementArray.length) {
      this.done = true;
      return {
        newIndex: [{ previousIndex: -1, newIndex: -1 }],
        done: this.done,
      };
    }
    const elementAtCurrentIndex = this.getElementAtIndex(
      elementArray,
      this.currentSortingIndex,
    );
    const elementToBeCompared = this.getElementAtIndex(
      elementArray,
      this.currentSortingIndex + 1,
    );
    let newIndex = [];
    if (
      elementAtCurrentIndex !== undefined &&
      elementToBeCompared !== undefined &&
      elementAtCurrentIndex > elementToBeCompared
    )
      newIndex = [
        {
          previousIndex: this.currentSortingIndex,
          newIndex: this.currentSortingIndex + 1,
        },
        {
          previousIndex: this.currentSortingIndex + 1,
          newIndex: this.currentSortingIndex,
        },
      ];
    else newIndex = [{ previousIndex: -1, newIndex: -1 }];
    if (
      ++this.currentSortingIndex >=
      elementArray.length - this.currentSortedElements
    ) {
      this.currentSortedElements++;
      this.currentSortingIndex = 0;
    }
    if (this.currentSortedElements >= elementArray.length) {
      this.done = true;
    }
    return { newIndex, done: this.done };
  }
}

export default BubbleSort;
