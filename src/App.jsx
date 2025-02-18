import React, { useEffect } from 'react';
import './App.css';
import {
  sp1Image, sp2Image, sp3Image, sp4Image,
  tot1Image, tot2Image, tot3Image, tot4Image,
  h1Image, h2Image, h3Image, h4Image,
  a1Image, a2Image, a3Image, a4Image,
  d1Image, d2Image, d3Image, d4Image
} from './images';
import AnimeSection from './components/AnimeSection';

const App = () => {
  useEffect(() => {
    const parallax = (e, container) => {
      const _w = container.offsetWidth / 2;
      const _h = container.offsetHeight / 2;
      const _mouseX = e.clientX - container.offsetLeft;
      const _mouseY = e.clientY - container.offsetTop;

      const images = container.querySelectorAll('img');

      images.forEach((img) => {
        let _depthX = (50 - ((_mouseX - _w) * 0.05)); 
        let _depthY = (50 - ((_mouseY - _h) * 0.05)); 
        img.style.transform = `translate(-50%, -50%) translate(${_depthX}%, ${_depthY}%)`;
      });
    };

    const imgBoxes = document.querySelectorAll('.imgBx');
    
    imgBoxes.forEach((imgBox) => {
      const handleMouseMove = (e) => parallax(e, imgBox);
      imgBox.addEventListener('mousemove', handleMouseMove);

      return () => {
        imgBox.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='box'>
          <AnimeSection title="Spirited Away" images={[sp1Image, sp2Image, sp3Image, sp4Image]} />
          <AnimeSection title="My Neighbor Totoro" images={[tot1Image, tot2Image, tot3Image, tot4Image]} />
          <AnimeSection title="Hunter x Hunter" images={[h1Image, h2Image, h3Image, h4Image]} />
          <AnimeSection title="Attack On Titan" images={[a1Image, a2Image, a3Image, a4Image]} />
          <AnimeSection title="Dragonball" images={[d1Image, d2Image, d3Image, d4Image]} />
        </div> 
      </div>
    </div>
  );
}

export default App;