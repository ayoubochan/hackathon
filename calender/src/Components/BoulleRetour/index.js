import React, {Component} from 'react';

class BoulleRetour extends Component{
    cosntructor(props){
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