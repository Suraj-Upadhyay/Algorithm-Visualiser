export interface IAlgorithmImplementation {
  done: boolean;
  step: (
    elementArray: Array<{
      data: number;
      index?: number;
    }>,
  ) => {
    newIndex: Array<{ previousIndex: number; newIndex: number }>;
    done: boolean;
  };
}

export type AlgorithmImplementation = new () => IAlgorithmImplementation;
