import React, {Component} from 'react';
import "./index.css"

class BoulleRetour extends Component{
    constructor(props){
        super(props)
        this.state={
            reponse: '',
            date:'',
            lienMusique:''
        }
    }
    render(){
        return(
            <li>
                <span> Donne ta réponsse
                    <input type="text" onChange={this.state.reponse} /> </span>
            </li>
        )
    }
}

export default BoulleRetour