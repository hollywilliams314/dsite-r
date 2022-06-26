import Header from './components/Header'
import Footer from './components/Footer'
import FrontPageSection from './components/FrontPageSection'


function App() {
  return (
    <div className="container">
      <Header />
      <FrontPageSection title={'Weddings & Events'} />
      <FrontPageSection title={'Lessons'} />
      <FrontPageSection title={'Harp Regulation'} />
      <Footer />
    </div>
  );
}

export default App;
