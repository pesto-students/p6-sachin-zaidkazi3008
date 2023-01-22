import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import LinkInput from './components/linkInput/LinkInput';
import LinkResult from './components/linkResult/LinkResult';
import Navbar from './components/navbar/Navbar';


function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="app">
      <Navbar/>
      <main className='main'>
      <LinkInput setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
