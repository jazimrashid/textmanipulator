import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2C3639";
      document.body.style.color = "white";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Manipulator"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            {/* <Route path="/about">
            <About />
          </Route> */}{" "}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route path="/">
              {/* <TextForm showAlert={showAlert} heading="Enter your keywords here"/> */}
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter your keywords here"
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
