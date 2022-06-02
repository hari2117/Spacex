import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes, useParams } from "react-router-dom";
import Rockets from "./Rocket";
import Rocketdetail from "./Rocketdetail";
import Historys from "./History";
import Histroysingle from "./Histroydetails";
import Hoc from "./Hoc/Hocgetdata";
import Hocgetone from "./Hoc/Hocgetonedetails";
import ProgressBar from "./ProgressBar";
import Launchdetail from "./Launchdetail";
import Notfound from "./Notfound"
let url;
const Rocket = Hoc(Rockets, (url = "https://api.spacexdata.com/v3/rockets"));
const Launchs = Hoc(
  React.lazy(() => import("./Launch")),
  (url = "https://api.spacexdata.com/v3/launches")
);
const History = Hoc(Historys, (url = "https://api.spacexdata.com/v3/history"));
const Historyget = Hocgetone(Histroysingle, (url = "history"));
const Rocketget = Hocgetone(Rocketdetail, (url = "rockets"));
const Launchdetails = Hocgetone(Launchdetail, (url = "launches"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rocket" element={<Rocket />}></Route>
        <Route path="/rocket/:id" element={<Rocketget />}></Route>

        <Route
          path="/launch"
          element={
            <Suspense fallback={<ProgressBar />}>
              <Launchs />
            </Suspense>
          }
        ></Route>
        <Route path="/launch/:id" element={<Launchdetails />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/history/:id" element={<Historyget />}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
