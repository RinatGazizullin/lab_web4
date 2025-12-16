import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        setPoints: (state, action) => {
            state.items = action.payload;
        },
    }
});

export const { setPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
export const selectPoints = (state) => state.points.items;
