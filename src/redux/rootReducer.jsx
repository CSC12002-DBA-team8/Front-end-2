import { combineReducers } from "redux";
import {TourReducer} from "./TourReducer";
import { InfoReducer } from "./InfoReducer";
import { PriceReducer } from "./PriceReducer";

export const rootReducer = combineReducers({
    TourReducer,
    InfoReducer,
    PriceReducer,
});