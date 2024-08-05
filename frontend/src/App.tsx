import Catalogo from "./components/Catalogo/index.tsx";
import React from "react";
import Home from "./components/Home/index.tsx";
import TopGames from "./components/TopGames/index.tsx";

function App() {

  return (
    <>
      <Home />
      <TopGames />
      <Catalogo />
    </>
  );
}

export default App;