import { createSlice } from "@reduxjs/toolkit";

export const giftFormDataSlice = createSlice({
  name: "giftFormData",
  initialState: {
    formState: {
      deliveryDate: "03/17/2023",
      firstName: "Anna",
      lastName: "Dou",
      email: "annadou@gmail.com",
      phone: "+1 917326937",
      country: "USA",
      street: "123 Main Street, Apt. E3",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
  },
  reducers: {
    formStateData: (state, action) => {
      state.formState = action.payload;
    },
  },
});

export const { formStateData } = giftFormDataSlice.actions;
export default giftFormDataSlice.reducer;
