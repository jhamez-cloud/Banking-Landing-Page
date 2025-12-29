import { createContext } from "react";
import { StateContextType } from "./ContextType";


export const StateContext = createContext<StateContextType | undefined>(undefined);