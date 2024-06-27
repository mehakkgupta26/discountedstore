// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  return json.products;
});


const productSlice = createSlice({
  name: 'products',
  initialState : {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add any other reducers specific to products
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

export const { } = productSlice.actions;
