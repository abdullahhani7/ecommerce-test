import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import type { TCategory } from "@customTypes/category";
import type { TLoading } from "@customTypes/shared";
interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlice.reducer;
export { actGetCategories };
