import React, {Component} from 'react';
import "./index.css";

let tableRandomNumbers= []
let lienGenere ='' ;

class GenerateRadioButton extends Component{
    constructor(props){
        super(props)
            this.state={
                suiteNombre: []
            }
        }
   /// ENVOIE VERS BOULES LISTE
        transferLink(elem){
            this.props.activateShare(elem)
        }
    /// GENERE 10 NOMBRES ALEATOIRES
        genereNombre(){
            tableRandomNumbers = []
            for(let i = 0; i < 10; i++){
                tableRandomNumbers.push(Math.round(Math.random() * 10))
            }
            return this.transferLink(tableRandomNumbers.join(""))
        }

    /// GENERE UN LIEN
        genereLien(){
            return ('link for your radio blindtest: PageRetour/' + tableRandomNumbers.join(""));
        }

        handleClick(ev){
            this.genereNombre(ev);
            lienGenere = this.genereLien();
        }

    render(){
        return(
            <div>
                <button onClick={(ev) => this.handleClick(ev)}> Créer ma radion blind test</button>
                <span>{lienGenere}</span>
            </div>
        );
    }
}

export default GenerateRadioButton;