import React, {Component} from 'react';
import "./index.css"

class BoulleRetour extends Component{
    constructor(props){
        super(props)
        this.state={
            reponse: ''
        }
    }

    transfer(ev){
        this.props.activateChange(ev)
    }

    render(){
        return(
            <li><span>{this.props.date}</span>
                <span>Donne ta réponsse</span>
                    <input type="text" onChange={this.state.reponse} />
                    <button onClick={(ev) => this.transfer(ev)}>Ok</button>
            </li>
        )
    }
}

export default BoulleRetour