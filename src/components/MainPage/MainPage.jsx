import React from 'react'
import './../style.css';
import imageInSrc from './../../imageInSrc.JPG';
export default function MainPage() {
    return (
        <div className="mainpage container">
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
                <h1 class="title red">Your name here</h1>
                <br />
                <img  id="imageInSrc" src={imageInSrc} title='imageInSrc'/>
                <br />
                <img id="imageInPublic" src={"/imageInPublic.JPG"} title='imageInPublic'/>
            </div>
            <video id="video" width="320" height="240" controls>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/mp4" />
            </video>
        </div>
    )
}
