import { useEffect } from "react";

import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";
import Landing from "./pages/Landing";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 100,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return <Landing />;
}

export default App;
