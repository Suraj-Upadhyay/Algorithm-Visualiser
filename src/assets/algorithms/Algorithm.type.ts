export interface IAlgorithmImplementation {
  step: (
    elementArray: {
      data: number;
      index?: number;
    }[],
  ) => {
    newIndex: { previousIndex: number; newIndex: number }[];
    done: boolean;
  };
}

export type AlgorithmImplementation = new () => IAlgorithmImplementation;
