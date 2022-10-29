import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Bio from "./components/Bio";
import Lessons from "./components/Lessons";
import Regulation from "./components/Regulation";
// import Page from './components/Page'
// import FrontPageSection from './components/FrontPageSection'
import Events from "./components/Events";
import ContactMe from "./components/ContactMe";
// import frontPagePic from "./img/Dleaningonharp2.jpg";

function App() {
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className="frontPage">
        <Header />
        <Routes>
          <Route path="dsite-r" element={<FrontPage />} />
          <Route path="dsite-r/" element={<FrontPage />} />
          <Route path="dsite-r/bio" element={<Bio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/regulation" element={<Regulation />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
