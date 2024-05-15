import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name:"application",
    initialState:{
        individualPageItem:{}
    },
    reducers:{
        setIndividualPageItem: (state,{payload}) => {
            state.individualPageItem = payload;
        }
    }
});

export const {
    setIndividualPageItem
} = applicationSlice.actions;

export default applicationSlice.reducer;