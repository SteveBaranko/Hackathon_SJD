

//import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import React, { useState, useEffect } from 'react';




function Home(){

    var [imgIndex, setImgIndex] = useState(0)
    const imgList = ["a1.jpeg","a2.jpeg","a3.jpeg"]

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
        <div className="wheelBox">
            <img className="leftArrow" src="arLeft.png" alt="rightArrow" onClick={indexLeft}></img>

            <img className="slideLeft" src={imgList[imgIndex]} alt="slide" ></img>
            <img className="slideBig" src={imgList[(imgIndex+1) % 3]} alt="slide" ></img>
            <img className="slideLeft" src={imgList[(imgIndex+2) % 3]} alt="slide" ></img>
            

            
            <img className="leftArrow" src="arRight.png" alt="LeftArrow" onClick={indexRight}></img>


        </div>
    )

}

export default Home;