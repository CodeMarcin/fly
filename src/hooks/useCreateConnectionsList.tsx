type connectionsListType = {
  [key: string]: any;
};

export const useCreateConnectionsList = (
  airportArray: string[],
  connectionsArray: string[][]
) => {
  const connectionsList: connectionsListType = {};

  const addNode = (key: string, connectionsListMap: connectionsListType) => {
    connectionsListMap[key] = [];
  };

  airportArray.forEach((key) => addNode(key, connectionsList));

  const addEdge = (
    start: string,
    end: string,
    connectionsListMap: connectionsListType
  ) => {
    connectionsListMap[start] = [...connectionsListMap[start], end];
    connectionsListMap[end] = [...connectionsListMap[end], start];
  };

  connectionsArray.forEach((routeItem: string[]) => {
    addEdge(...(routeItem as [string, string]), connectionsList);
  });

  return connectionsList;
};
