import React, {Component} from "react"
import "./index.css"
import ListRetour from "../../Components/ListRetour/index"
import Video from "../../Components/Video/index"

class PageRetour extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Video />
                <ListRetour />
            </div>
        )
    }
}

export default PageRetour