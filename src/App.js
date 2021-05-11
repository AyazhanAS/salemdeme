
import './App.css';
import Main from './components/mainPage/Main';
import Footer from './footer/Footer';
import Header from './header/Header';


function App() {
  return (
    <div className="app__wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
