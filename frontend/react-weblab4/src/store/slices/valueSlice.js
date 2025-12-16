import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 1
};

const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = isNaN(action.payload) ? state.value : action.payload;
        },
    }
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;
export const selectValue = (state) => state.value.value;
