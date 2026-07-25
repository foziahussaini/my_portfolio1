import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero"; // Renders your navbar, background video, and profile text together

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#041520] min-h-screen w-full relative z-0">
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
