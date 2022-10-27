import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/whoArray.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});

export default whoSlice.reducer;