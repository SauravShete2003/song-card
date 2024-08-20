import React from 'react';
import "../../data";
import {SongAlbum} from '../../data';
import "./SongCard.css"

function SongCard({ title, image, artist, rating }) {
  return (

    <div className='song-card-container'>
      <img src={image} className='song-card-image' alt={`${title} cover`} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

function SongDetails() {
  return (
    <>

      <div className='song-detail-container'>
        {SongAlbum.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            image={song.image}
            artist={song.artist}
            rating={song.rating}
          />
        ))}
      </div>
    </>
  );
}

export default SongDetails;

