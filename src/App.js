import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Topbar from "./components/Topbar";
import SIPPage from "./pages/SIPPage";
import SipReq from "./pages/SipReq";
import SipReqRes from "./pages/SipReqRes";
import SwpLumpsum from "./pages/SwpLumpsum";
import SWPResult from "./pages/SWPResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Topbar />

        <Routes>
          <Route exact path="/" element={<SIPPage />} />
          <Route exact path="/sipreq" element={<SipReq />} />
          <Route exact path="/sipresult" element={<SipReqRes />} />
          <Route exact path="/swplumpsum" element={<SwpLumpsum />} />
          <Route exact path="/swpresult" element={<SWPResult />} />

          {/* <SIPPage /> */}
          {/* <SipReq /> */}
          {/* <SipReqRes /> */}
          {/* <SwpLumpsum /> */}
          {/* <SWPResult /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
