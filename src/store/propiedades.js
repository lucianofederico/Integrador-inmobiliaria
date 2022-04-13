import { createAction, createReducer } from "@reduxjs/toolkit"

export const setPropiedad = createAction( "Propiedad" )

export const propiedad = createReducer( null, { 
   [ setPropiedad ]: ( state, action ) => action.payload
} )

