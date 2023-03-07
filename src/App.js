import './App.css';
import Header from './components/Header';
import Sec01 from './components/Sec01';
import Sec02 from './components/Sec02';
import Sec03 from './components/Sec03';
import TopImage from './components/TopImage';
import SubTitle from './components/SubTitle';
import Slider from './components/Slider';
import styles from './style';



function App() {  
  return (
  <main>
    <div className={`${styles.padding}${styles.flexCenter}`}>
      <div className='bg-[#08B0CB]'>
        <Header />
        <TopImage />
        <Slider />
      </div>  
      <SubTitle />
      <Sec01 />
      <Sec02 />
      <Sec03 />
    </div>
  </main>




  );
}

export default App;
