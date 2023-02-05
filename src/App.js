import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Bio from "./components/Bio";
import Lessons from "./components/Lessons";
import Regulation from "./components/Regulation";
import Events from "./components/Events";
import ContactMe from "./components/ContactMe";

function App() {
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <HashRouter>
      <div>
        {/* <div className="frontPage"></div> */}
        <Header />
        <Routes>
          <Route path="" element={<FrontPage />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/regulation" element={<Regulation />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
