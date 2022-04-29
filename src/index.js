import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import {store} from "./store/store"
import Footer from "./commons/Footer";

ReactDOM.render(
  <Provider store = { store }>
    <ChakraProvider>
      <BrowserRouter>
  
       
        <App />

         <Footer /> 
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);

// Regex - formik - react hook forms
