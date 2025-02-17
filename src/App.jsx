import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Router from './application/Router'
import musicFile from './source/warmbright-fantasy.mp3'


function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
      audioRef.current = new Audio(musicFile);
      audioRef.current.loop = true; 

      return () => {
          if (audioRef.current) {
              audioRef.current.pause();
          }
      };
  }, []);

  const toggleSound = () => {
      if (!audioRef.current) return;

      if (isPlaying) {
          audioRef.current.pause();
      } else {
          audioRef.current.play().catch(error => console.error("Error al reproducir el audio:", error));
      }

      setIsPlaying(!isPlaying);
  }
    return (
      <>
    
        <Header isPlaying={isPlaying} toggleSound={toggleSound}/>
        <Router/>
        <Footer/>  
       
      </>
    )
}
export default App;