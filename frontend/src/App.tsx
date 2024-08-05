import Catalogo from "./components/Catalogo/index.tsx";
import React from "react";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./components/Home/index.tsx";

function App() {

  return (
    <>
      <Home />
      <Catalogo />
      <Footer/>
    </>
  );
}

export default App;