

//import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import React, { useState, useEffect } from 'react';




function Home(){

    var [imgIndex, setImgIndex] = useState(9)
    /*const imgList = ['https://i.scdn.co/image/ab67616d0000b273e2c72f93d6358cdcf5ac5e36', 'https://i.scdn.co/image/ab67616d0000b273a5bf6380afb939747141f354', 'https://i.scdn.co/image/ab67616d0000b273f80fe67d0f4293be5b8f5251', 'https://i.scdn.co/image/ab67616d0000b273fa301e01c3ec11e2e06ca875', 'https://i.scdn.co/image/ab67616d0000b27388b4a33afa5a63808eb1ea2b', 'https://i.scdn.co/image/ab67616d0000b273f0aabc547215e3e84b1cc9f3', 'https://i.scdn.co/image/ab67616d0000b273b1bc705bc920ac76620bc818', 'https://i.scdn.co/image/ab67616d0000b273505190077497c230422f2934', 'https://i.scdn.co/image/ab67616d0000b273aa5e4c9da271951ac0b31fa2', 'https://i.scdn.co/image/ab67616d0000b2739596e3d019703b3a8a3f35ac'];*/
    
    const imgList = ['https://i.scdn.co/image/ab67616d0000b273e2c72f93d6358cdcf5ac5e36', 'https://i.scdn.co/image/ab67616d0000b273a5bf6380afb939747141f354', 'https://i.scdn.co/image/ab67616d0000b273f80fe67d0f4293be5b8f5251', 'https://i.scdn.co/image/ab67616d0000b273fa301e01c3ec11e2e06ca875', 'https://i.scdn.co/image/ab67616d0000b27388b4a33afa5a63808eb1ea2b', 'https://i.scdn.co/image/ab67616d0000b273f0aabc547215e3e84b1cc9f3', 'https://i.scdn.co/image/ab67616d0000b273b1bc705bc920ac76620bc818', 'https://i.scdn.co/image/ab67616d0000b273505190077497c230422f2934', 'https://i.scdn.co/image/ab67616d0000b273aa5e4c9da271951ac0b31fa2', 'https://i.scdn.co/image/ab67616d0000b2739596e3d019703b3a8a3f35ac'];

    const embed = ['https://open.spotify.com/embed/album/0pGk5GqEidvPcTratzBAyJ?utm_source=generator',
            'https://open.spotify.com/embed/album/3694mRyFRENNzNml798Krk?utm_source=generator',
            'https://open.spotify.com/embed/album/7bO2aXCaoPZi6ozNSWFwy6?utm_source=generator',
            'https://open.spotify.com/embed/album/0xEUOENXKtOMg0BVr34jur?utm_source=generator',
            'https://open.spotify.com/embed/album/2AQiTJswhoWbCFGOsiEPBP?utm_source=generator',
            'https://open.spotify.com/embed/album/2R0nfEjaMFMb8qyPnQmDzK?utm_source=generator',
            'https://open.spotify.com/embed/album/7x5TwT9mdui63xxYpnZdNU?utm_source=generator',
            'https://open.spotify.com/embed/album/5W1XY5ucNATjTULERvXx9j?utm_source=generator',
            'https://open.spotify.com/embed/album/4HDJMKkwAMVFewqfZcmf84?utm_source=generator',
            'https://open.spotify.com/embed/album/2jBsjUNWT1qKhYEZVXlnj0?utm_source=generator']

    function indexRight(){
        if (imgIndex == (imgList.length - 1)){
            setImgIndex(0);
        }
        else{
            setImgIndex(imgIndex + 1);
        }
        
    }

    function indexLeft(){
        if (imgIndex == 0){
            
            setImgIndex( imgList.length - 1);
        }
        else{
            setImgIndex(imgIndex - 1);
        }
        
    }

    class List extends React.Component {
        constructor(props){
            super(props);
            this.state = {items: {images}}
            this.change = {indexRight}
        }
    }

    function images(){
        for (var i=0;i<imgList.length;i++){
            if (i == 1){
                return <img className="slideBig" src={imgList[imgIndex]} alt="slide" key={i}></img>
            }
            return <img className="slideLeft" src={imgList[imgIndex]} alt="slide" key={i}></img>
        }
    }

    return(
        <div className="containerWheelBox">
            <div className="wheelBox">
                <img className="leftArrow" src="arLeftOne.png" alt="rightArrow" onClick={indexLeft}></img>

                <img className="slideLeft" src={imgList[imgIndex]} alt="slide" onClick={indexLeft}></img>
                <img className="slideBig" src={imgList[(imgIndex+1) % imgList.length]} alt="slide" ></img>
                <img className="slideLeft" src={imgList[(imgIndex+2) % imgList.length]} alt="slide" onClick={indexRight}></img>
                

                
                <img className="leftArrow" src="arRightOne.png" alt="LeftArrow" onClick={indexRight}></img>


            </div>
            <iframe src={embed[(imgIndex+1)%imgList.length]} width="80%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    )

}

export default Home;