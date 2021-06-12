import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sections from "./components/Sections/Sections";
import GlobalStyle from "./themes/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Sections />
    </>
  );
}
export default App;
