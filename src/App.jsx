import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import GlobalStyle from "./themes/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
    </>
  );
}
export default App;
