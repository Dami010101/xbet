import './App.css';
import Content from './components/content/Content';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Xdownload from './components/xdownload/Xdownload';


function App() {
  return (
    <div className="App">
      <div className='headerContent'>
      <Header/>
      <Content/>
      <Features/>
      <Xdownload/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
