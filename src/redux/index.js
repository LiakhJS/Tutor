
import { configureStore } from '@reduxjs/toolkit';
import { registrationAuthorization } from './registrationAndAuthorization';


export const store = configureStore({
  reducer: {
    registrationAuthorization: registrationAuthorization.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })

});

