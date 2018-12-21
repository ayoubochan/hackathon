import React, {Component} from "react"
import "./index.css"
import YouTube from "react-youtube"

class Video extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { 
              autoplay: 1
            }
          };
        return(
            <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this.onReady}
            />
        )
    }
    onReady(event){
        event.target.pauseVideo()
    }
}

export default Video