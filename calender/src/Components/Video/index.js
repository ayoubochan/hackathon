/*import React, {Component} from "react"
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
            height: '30',
            width: '40',
            playerVars: { 
              autoplay: 1
            }
          };
        return(
            <YouTube
            videoId={this.props.video}
            opts={opts}
            onReady={this.onReady}
            />
        )
    }
    onReady(event){
        event.target.pauseVideo()
    }
}

export default Video; */