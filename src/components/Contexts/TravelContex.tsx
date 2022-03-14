import React, { useReducer } from 'react';

type initialTravelType = {
  travelPath: string[];
};

type travelReducerActionType = {
  type: 'ADD_DESTINATION' | 'DELETE_DESTINATION';
  airportCity: string;
  pathIndex: number;
};

type travelContextType = {
  travelPath: string[];
  dispatch: React.Dispatch<travelReducerActionType>;
};

type TravelContextProviderProps = {
  children: React.ReactNode;
};

const initialTravel: initialTravelType = {
  travelPath: ['',''],
};

const travelReducer = (
  state: initialTravelType,
  action: travelReducerActionType
) => {
  switch (action.type) {
    case 'ADD_DESTINATION':
      if (state.travelPath[action.pathIndex] === undefined) {
        return {
          ...state,
          travelPath: [...state.travelPath, action.airportCity],
        };
      } else if (state.travelPath[action.pathIndex] !== undefined) {
        let temporaryState = [...state.travelPath];
        temporaryState.splice(action.pathIndex, 1, action.airportCity);
        return { ...state, travelPath: temporaryState };
      }
      return state;

      case 'DELETE_DESTINATION':
        let temporaryState = [...state.travelPath];
        temporaryState.splice(action.pathIndex, 1);
        return { ...state, travelPath: temporaryState };

    default:
      return state;
  }
};

export const TravelContext = React.createContext<travelContextType>({
  travelPath: [],
  dispatch: () => {},
});

export const TravelContextProvider = ({
  children,
}: TravelContextProviderProps) => {
  const [travelState, dispatchTravel] = useReducer(
    travelReducer,
    initialTravel
  );
  
  return (
    <TravelContext.Provider
      value={{
        travelPath: travelState.travelPath,
        dispatch: dispatchTravel,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
