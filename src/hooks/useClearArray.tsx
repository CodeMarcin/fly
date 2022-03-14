export const useClearArray = (arrayToClear: string[]) => {
  let temporaryArray: string[] = [];

  for (let itemArrayToClear of arrayToClear) {
    itemArrayToClear && temporaryArray.push(itemArrayToClear);
  }

  return temporaryArray;
};
