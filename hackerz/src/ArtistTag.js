import './ArtistTag.css';

export function ArtistTag({ name, genre, image, flag }) {
  
  return (
    <div className="tagContainer">
      <img src={image} alt={name} className="artistImage"></img>
      <img src={flag} alt={name} className="flagImage"></img>
      <div className="tagName">{name}</div>
      <div className="tagGenre">{genre}</div>
    </div>
  );
}