import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Router from "./Router/Router";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Navbar end */}

      {/* Router */}
      <Router />
      {/* Router end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </div>
  );
};

export default App;
