import { useState } from 'react';

export function Albums() {
  const [count, setCount] = useState(0);
  const [currentAlbum, setAlbum] = useState(0);

  const pictures = ['https://i.scdn.co/image/ab67616d0000b273e2c72f93d6358cdcf5ac5e36', 'https://i.scdn.co/image/ab67616d0000b273a5bf6380afb939747141f354', 'https://i.scdn.co/image/ab67616d0000b273f80fe67d0f4293be5b8f5251', 'https://i.scdn.co/image/ab67616d0000b273fa301e01c3ec11e2e06ca875', 'https://i.scdn.co/image/ab67616d0000b27388b4a33afa5a63808eb1ea2b', 'https://i.scdn.co/image/ab67616d0000b273f0aabc547215e3e84b1cc9f3', 'https://i.scdn.co/image/ab67616d0000b273b1bc705bc920ac76620bc818', 'https://i.scdn.co/image/ab67616d0000b273505190077497c230422f2934', 'https://i.scdn.co/image/ab67616d0000b273aa5e4c9da271951ac0b31fa2', 'https://i.scdn.co/image/ab67616d0000b2739596e3d019703b3a8a3f35ac'];

  function handleClick() {
    setCount(count + 1);
  }

  function handleAlbumRight() {
    setAlbum((currentAlbum + 1)%10);
  }

  function handleAlbumLeft() {
    setAlbum((currentAlbum + 9)%10);
  }


  return (
    <div>
      <button onClick={handleClick}>
        You pressed me {count} times. 
      </button>
      <div>
        <button onClick={handleAlbumLeft}>
          Change to the left.
        </button>
        <img src={pictures[currentAlbum]} alt="img"></img>
        <button onClick={handleAlbumRight}>
          Change to the right.
        </button>
      </div>
    </div>
  );
}