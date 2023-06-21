import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const createStore = (): EnhancedStore => reducer;

// Eu exporto a configuração do store (reducer)
export default configureStore({
  reducer: {
    reducer,
  },
});
