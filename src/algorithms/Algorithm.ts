import * as constants from "../assets/constants";
import { type IAlgorithmImplementation } from "./Algorithm.type";

class Element {
  data: number;
  length: number;
  indexArray: number[];
  stepArray: number[];

  constructor(index: number, data: number) {
    this.data = data;
    this.indexArray = [];
    this.stepArray = [];
    this.length = 0;
    this.addIndex(0, index);
  }

  getTopIndex(): number | undefined {
    return this.indexArray.at(-1); // Solution to Bug #3 this.indexArray[this.stepArray.at(-1)];
  }

  getCurrentIndex(stepNumber: number): number {
    let latestStepNumber = 0;
    for (let i = this.stepArray.length - 1; i >= 0; i--) {
      if (stepNumber >= this.stepArray[i]) {
        latestStepNumber = i;
        break; // Bug #1 Solution;
      }
    }
    return this.indexArray[latestStepNumber];
  }

  addIndex(stepCount: number, newIndex: number): void {
    this.indexArray.push(newIndex); // Solution to Bug #2 this.indexArray[stepCount] = newIndex;
    this.stepArray.push(stepCount);
    this.length++;
  }
}

class ElementArray {
  length: number;
  maxData: number;
  elementArray: Element[];

  constructor(dataLength: number, maxData: number) {
    this.length = dataLength;
    this.maxData = maxData;
    this.elementArray = this.generateRandomElementArray();
  }

  generateRandomElementArray(): Element[] {
    const randomNumberArray = Array.from({ length: this.length }, () =>
      Math.floor(Math.random() * this.maxData),
    );
    const randomElementArray = randomNumberArray.map((value, index) => {
      return new Element(index, value);
    });
    return randomElementArray;
  }

  getElementsAtStep(
    stepNumber: number,
  ): Array<{ data: number; index: number }> {
    return this.elementArray.map((element) => {
      return { data: element.data, index: element.getCurrentIndex(stepNumber) };
    });
  }

  getElementsAtCurrentStep(): Array<{ data: number; index?: number }> {
    return this.elementArray.map((element) => {
      return { data: element.data, index: element.getTopIndex() };
    });
  }
}

class Algorithm {
  elementArray: ElementArray;
  totalSteps: number;
  currentStep: number;
  done: boolean;
  algorithmObj: null | IAlgorithmImplementation;

  constructor(dataLength: number, maxData: number) {
    this.elementArray = new ElementArray(dataLength, maxData);
    this.totalSteps = 0;
    this.currentStep = 0;
    this.done = false;
    this.algorithmObj = null;
  }

  createAlgorithmObject(algorithmName: string): boolean {
    if (algorithmName === "") return false;
    const AlgorithmClassName =
      constants.ALGO_IMPLEMENTATION_LIST[algorithmName];
    if (AlgorithmClassName !== null)
      this.algorithmObj = new AlgorithmClassName();
    return true;
  }

  updateElementArray(
    newIndexArray: Array<{ previousIndex: number; newIndex: number }>,
  ): void {
    for (let i = 0; i < newIndexArray.length; i++) {
      const { previousIndex, newIndex } = newIndexArray[i];
      if (previousIndex === -1) continue;
      for (let j = 0; j < this.elementArray.length; j++) {
        const currentElementIndex = this.elementArray.elementArray[
          j
        ].getCurrentIndex(this.totalSteps - 1);
        if (currentElementIndex === previousIndex) {
          this.elementArray.elementArray[j].addIndex(this.totalSteps, newIndex);
          break;
        }
      }
    }
  }

  step(): boolean {
    if (!this.done && this.algorithmObj !== null) {
      this.totalSteps++;
      this.currentStep++;
      const { newIndex, done } = this.algorithmObj.step(
        this.elementArray.getElementsAtCurrentStep(),
      );
      this.updateElementArray(newIndex);
      this.done = done;
    }
    return !this.done;
  }

  stepForward(): Array<{ data: number; index?: number }> {
    this.currentStep++;
    if (this.currentStep <= this.totalSteps) {
      return this.elementArray.getElementsAtStep(this.currentStep);
    }
    this.currentStep--;
    this.step();
    return this.elementArray.getElementsAtCurrentStep();
  }

  stepBackward(): Array<{ data: number; index?: number }> {
    if (this.currentStep === 0) {
      return this.elementArray.getElementsAtStep(0);
    }
    return this.elementArray.getElementsAtStep(--this.currentStep);
  }
}

export { Element, ElementArray, Algorithm };
