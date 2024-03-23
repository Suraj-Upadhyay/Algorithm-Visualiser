import * as constants from "../constants";

class Element {
  constructor(index, data) {
    this.data = data;
    this.indexArray = [];
    this.stepArray = [];
    this.addIndex(0, index);
  }

  getTopIndex() {
    return this.indexArray.at(-1); // Solution to Bug #3 this.indexArray[this.stepArray.at(-1)];
  }

  getCurrentIndex(stepNumber) {
    let latestStepNumber = 0;
    for (let i = this.stepArray.length - 1; i >= 0; i--) {
      if (stepNumber >= this.stepArray[i]) {
        latestStepNumber = i;
        break; // Bug #1 Solution;
      }
    }
    return this.indexArray[latestStepNumber];
  }

  addIndex(stepCount, newIndex) {
    this.indexArray.push(newIndex); // Solution to Bug #2 this.indexArray[stepCount] = newIndex;
    this.stepArray.push(stepCount);
    this.length++;
  }
}

class ElementArray {
  constructor(dataLength, maxData) {
    this.length = dataLength;
    this.maxData = maxData;
    this.elementArray = this.generateRandomElementArray();
  }

  generateRandomElementArray() {
    let randomNumberArray = Array.from({ length: this.length }, () =>
      Math.floor(Math.random() * this.maxData)
    );
    let randomElementArray = randomNumberArray.map((value, index) => {
      return new Element(index, value);
    });
    return randomElementArray;
  }

  getElementsAtStep(stepNumber) {
    return this.elementArray.map(element => {
      return { data: element.data, index: element.getCurrentIndex(stepNumber) };
    });
  }

  getElementsAtCurrentStep() {
    return this.elementArray.map(element => {
      return { data: element.data, index: element.getTopIndex() };
    });
  }
}

class Algorithm {
  constructor(dataLength, maxData) {
    this.elementArray = new ElementArray(dataLength, maxData);
    this.totalSteps = 0;
    this.currentStep = 0;
    this.done = false;
    this.algorithmObj = null;
  }

  createAlgorithmObject(algorithmName) {
    if (algorithmName === "") return false;
    const algorithmClassName =
      constants.ALGO_IMPLEMENTATION_LIST[algorithmName];
    this.algorithmObj = new algorithmClassName();
    return true;
  }

  updateElementArray(newIndexArray) {
    for (let i = 0; i < newIndexArray.length; i++) {
      let { previousIndex, newIndex } = newIndexArray[i];
      if (previousIndex === -1) continue;
      for (let j = 0; j < this.elementArray.length; j++) {
        let currentElementIndex = this.elementArray.elementArray[
          j
        ].getCurrentIndex(this.totalSteps - 1);
        if (currentElementIndex === previousIndex) {
          this.elementArray.elementArray[j].addIndex(this.totalSteps, newIndex);
          break;
        }
      }
    }
  }

  step() {
    if (!this.done) {
      this.totalSteps++;
      this.currentStep++;
      let { newIndex, done } = this.algorithmObj.step(
        this.elementArray.getElementsAtCurrentStep()
      );
      this.updateElementArray(newIndex);
      this.done = done;
    }
    return !this.done;
  }

  stepForward() {
    this.currentStep++;
    if (this.currentStep <= this.totalSteps) {
      return this.elementArray.getElementsAtStep(this.currentStep);
    }
    this.currentStep--;
    this.step();
    return this.elementArray.getElementsAtCurrentStep();
  }

  stepBackward() {
    if (this.currentStep === 0) {
      return this.elementArray.getElementsAtStep(0);
    }
    return this.elementArray.getElementsAtStep(--this.currentStep);
  }
}

export default Algorithm;

// let algo_obj = new Algorithm(10, 50, 'Selection Sort');
// while(!algo_obj.done) {
//   let indexOrderedArray = algo_obj.stepForward();
//   indexOrderedArray.sort((item1, item2) => item1.index - item2.index);
//   console.log(indexOrderedArray);
// }

// Debigging info.
// console.log("----");
// this.elementArray.elementArray
// .forEach(
//    (element)=>
//      console.log(element.data, element.indexArray, element.stepArray
//  );
