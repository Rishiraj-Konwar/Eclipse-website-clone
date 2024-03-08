import React from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import SignUp from "./Components/SignUp";
import Page3 from "./Components/Page3";
import Marquee from "./Components/Marquee";
import Marquee2 from "./Components/Marquee2";
import { linkArr1, linkArr2 } from "./Components/Data";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main>
      <Page1 />
      <Page2 />
      <SignUp />
      <Page3 />
      <Marquee />
      <Marquee2
        heading={"Backed by great investors"}
        arr={linkArr1}
        border={true}
      />
      <Marquee2
        heading={"with strong support from ecosystems"}
        arr={linkArr2}
        border={false}
      />

      <Footer />
    </main>
  );
};

export default App;
