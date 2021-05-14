import { ChakraProvider } from "@chakra-ui/react";

import React, { useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      {/* <Login /> */}
      <Home />
    </ChakraProvider>
  );
}

export default App;
