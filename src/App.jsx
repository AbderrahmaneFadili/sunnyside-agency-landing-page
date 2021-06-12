import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sections from "./components/Sections/Sections";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import GlobalStyle from "./themes/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Sections />
      <Services />
      <Testimonials />
    </>
  );
}
export default App;
