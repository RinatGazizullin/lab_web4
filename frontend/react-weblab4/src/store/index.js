import { configureStore } from '@reduxjs/toolkit';
import pointsReducer from './slices/points';
import valueReducer from './slices/valueSlice';
import clockReducer from "./slices/clockSlice";

export const store = configureStore({
    reducer: {
        points: pointsReducer,
        value: valueReducer,
        watches: clockReducer
    },
});
