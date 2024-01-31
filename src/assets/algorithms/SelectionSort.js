class SelectionSort {
  constructor() {
    this.currentSortingIndex = 0;
    this.done = false;
  }

  getElementAtIndex(elementArray, index) {
    for (let i = 0; i < elementArray.length; i++) {
      if (elementArray[i].index === index) return elementArray[i].data;
    }
  }

  step(elementArray) {
    let minimum_index = this.currentSortingIndex;
    for (let i = this.currentSortingIndex + 1; i < elementArray.length; i++)
      if (this.getElementAtIndex(elementArray, i) < this.getElementAtIndex(elementArray, minimum_index))
        minimum_index = i;
    let newIndex = []
    if (minimum_index === this.currentSortingIndex) {
      newIndex = [{previousIndex: -1, newIndex: -1}];
    }
    else {
      newIndex = [{previousIndex: this.currentSortingIndex, newIndex: minimum_index},
                  {previousIndex: minimum_index, newIndex: this.currentSortingIndex}]
    }
    this.currentSortingIndex++;
    if (this.currentSortingIndex >= elementArray.length) this.done = true;
    return {newIndex: newIndex, done: this.done};
  }
}

export default SelectionSort;
