import React, {Component} from 'react';
import "./index.css"

let tableRandomNumbers= []

class GenerateRadioButton extends Component{
    constructor(props){
        super(props)
            this.state={
                suiteNombre: []
            }
        }
   
        transferLink(elem){
            this.props.activateShare(elem)
        }

        genereNombre(ev){
            tableRandomNumbers = []
            for(let i = 0; i < 10; i++){
                tableRandomNumbers.push(Math.round(Math.random() * 10))
            }
            return this.transferLink(tableRandomNumbers.join(""))
        }

    render(){
        return(
            <div>
                <button onClick={(ev) => this.genereNombre(ev)}> Créer ma radion blind test</button>
            </div>
        );
    }
}

export default GenerateRadioButton;