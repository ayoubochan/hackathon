import React, {Component} from 'react';

let tableRandomNumbers= []

class GenerateRadioButton extends Component{
    constructor(props){
        super(props)
            this.state={
                suiteNombre: []
            }
        }

        genereNombre(ev){
            for(let i = 0; i<10; i++){
                tableRandomNumbers.push(Math.round(Math.random() * 10))
            }
            this.setState({
                suiteNombre : tableRandomNumbers
            });
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