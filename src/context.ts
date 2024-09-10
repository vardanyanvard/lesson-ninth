import type { IContext } from "./types";
import React from "react";

export const UserContext = React.createContext<IContext | undefined>(undefined);
