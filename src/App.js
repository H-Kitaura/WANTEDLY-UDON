import './App.css';
import Header from './components/Header';
import Sec01 from './components/Sec01';
import Sec02 from './components/Sec02';
import Sec03 from './components/Sec03';
import TopImage from './components/TopImage';
import SubTitle from './components/SubTitle';
import Slider from './components/Slider';
import Price from './components/Price';
import styles from './style';


function App() {  
  return (
  <main>
      <div className={`${styles.bg2Gradation}`}>
        <Header />
        <TopImage />
        <Slider />
      </div>  
      <SubTitle />
      <Sec01 />
      <Sec02 />
      <Sec03 />
      <Price />
  </main>




  );
}

export default App;
