import React, {Component} from "react"
import "./index.css"
import ListRetour from "../../Components/ListRetour/index"

class PageRetour extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <ListRetour />
            </div>
        )
    }
}

export default PageRetour