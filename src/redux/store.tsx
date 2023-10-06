import { configureStore } from "@reduxjs/toolkit";
import stepCounterReducer from "./slices/stepsCounter";
import giftFormDataReducer from "./slices/giftFormData";

export const store = configureStore({
  reducer: { counter: stepCounterReducer, giftFormData: giftFormDataReducer },
});
