import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { user } from "./user"
import { propiedad } from "./propiedades"

export const store = configureStore( {
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat( logger ),
   reducer: {
      user: user,
      propiedad: propiedad
   }
 } )