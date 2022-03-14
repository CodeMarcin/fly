import {useClearArray} from "./useClearArray"

export const useSearchConnection = (
  travelArray: string[],
  connectionsList: { [key: string]: any },
): any => {

  const clearedArray = useClearArray(travelArray)

  let arrayResult: any[] = [];

  for (let i = 0; i <= clearedArray.length; i++) {
    
    let queue = [clearedArray[i]];
    let previevs = { [clearedArray[i]]: null };

    while (queue.length) {
      let current: any = queue.shift();

      if (current === clearedArray[i + 1]) {
        let path = [];

        while (current) {
          path.unshift(current);
          current = previevs[current];
        }
      
        arrayResult.push(path);
      }

      if (current in connectionsList) {
        for (let item of connectionsList[current]) {
          if (!(item in previevs)) {
            previevs[item] = current;
            queue.push(item);
          }
        }
      }
    }
  }

  // resultAsOneArray = resultAsOneArray.filter(
  //   (item, index) => resultAsOneArray[index - 1] !== item
  // );
 

  return arrayResult;
};
