const { createSlice } = require('@reduxjs/toolkit');

const initialState = { 
    userId: null,
    nickname: null,
};

const rootReducer = createSlice({
    name: 'reducer',
    initialState,
    extraReducers: builder => {
        
    },
});

export const authReducer = rootReducer.reducer;