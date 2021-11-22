
import './App.css';
import Header from './components/Header'
import Hiro from './components/Hiro'
import MyWork from './components/MyWork'
import About from './components/About';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function App() {
  return (
    <div>
    <Element name="Home">
      <Header />
      <Hiro />
    {/* <button className="fixied bottom-10 right-10  bg-white fixed" type="button">top</button> */}
    </Element>
    <Element name="MyWork">
      <MyWork />
    </Element>
    <Element name="About">
      <About />
    </Element>
    <Element name="Hire">
      <Footer />
    </Element>
    </div>
  );
}

export default App;
