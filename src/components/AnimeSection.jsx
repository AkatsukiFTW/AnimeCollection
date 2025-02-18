import React from 'react';

const AnimeSection = ({ title, images }) => {
  return (
    <div className='imgBx'>
      <h1>{title}</h1>
      {images.map((image, index) => (
        <img key={index} className={`img${index + 1}`} src={image} alt={title} />
      ))}
    </div>
  );
};

export default AnimeSection;