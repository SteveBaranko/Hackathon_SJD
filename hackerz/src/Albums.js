import { useState } from 'react';

export function Albums() {
  const [count, setCount] = useState(0);
  const [currentAlbum, setAlbum] = useState(0);

  const pictures = ['https://dummyimage.com/600x400/000/fff',
      './assets/2',
      './assets/3',
      './assets/4',
      './assets/5',
      './assets/6',
      './assets/7',
      './assets/8',
      './assets/9',
      './assets/10',
    ];

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
        <img src={pictures[currentAlbum]}></img>
        <button onClick={handleAlbumRight}>
          Change to the right.
        </button>
      </div>
    </div>
  );
}