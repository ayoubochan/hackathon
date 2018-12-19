import React, {Component} from "react"
import Boulle from "../Boulle/index"

const Boules = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

class BouleList extends Component{
    constructor(props){
        super(props);
        this.state = {
            youtubeLink: []
        }
    }

    RecupURL(elem){
        this.setState({
            youtubeLink: this.state.youtubeLink.push(elem)
        })
    }

    render(){
        return(
            <ul>
                {Boules.map((elem, index) => (
                <Boulle key={index} activateUrl={(elem) => this.RecupURL(elem)} />
            ))}
               
            </ul>
        )
    }
}

export default BouleList;