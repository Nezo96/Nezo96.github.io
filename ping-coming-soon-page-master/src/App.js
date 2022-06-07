import React, { useState } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  const [error, setError] = useState('flase');

  const handleSubmit = (e) => {
    e.prevendDefault();
  }

  return (
    <div className="App">
      <Header />
      <Main
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default App;
