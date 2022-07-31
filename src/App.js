import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Footer from './components/Footer'
import Bio from './components/Bio'
import Lessons from './components/Lessons'
import Regulation from './components/Regulation'
// import Page from './components/Page'
// import FrontPageSection from './components/FrontPageSection'
import Events from './components/Events'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <Router>
        <h2>Home Page</h2>
      <div className="container">
        {/* <Header /> */}
        {/* <FrontPageSection title={'Weddings & Events'} />
        <FrontPageSection title={'Lessons'} />
      <FrontPageSection title={'Harp Regulation'} /> */}
      {/* <div>  */}
        <Routes>
          {/* <Route path='/' exact /> */}
          <Route path="/bio" element={<Bio />} />
          {/* <Route path="/bio" component={Bio} /> */}
          {/* <Route path="/page" component={Page} /> */}
          <Route path='/events' element={<Events />} />
          <Route path='/lessons' element={<Lessons />} />
          <Route path='/regulation' element={<Regulation />} />
          <Route path='/contactMe' element={<ContactMe />} />

        </Routes>
        <Footer />
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
