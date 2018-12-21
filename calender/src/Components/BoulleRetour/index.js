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
            <li className="affiche-date"><span className="date">{this.props.date}</span>
                <span>Donne ta réponsse</span>
                    <input type="text" onChange={this.state.reponse} />
                    <button onClick={(ev) => this.transfer(ev)} className="bouton-valider" >Ok</button>
            </li>
        )
    }
}

export default BoulleRetour