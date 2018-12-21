import React, {Component} from 'react';
import "./index.css";

let tableRandomNumbers= []
let lienGenere ='' ;

class GenerateRadioButton extends Component{
    constructor(props){
        super(props)
            this.state={
                suiteNombre: [],
<<<<<<< HEAD
                id: 1,
=======
                id: 2
>>>>>>> 0f2f2854b4333d6e7f2f5da41b8dda2abd53541a
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
            return ('link for your radio blindtest: localhost:3000/retour/' + tableRandomNumbers.join("") + '/' + this.state.id);
        }

        handleClick(ev){
            this.genereNombre(ev);
            lienGenere = this.genereLien();
            this.setState({
                id: this.state.id +1
            })
            this.props.activateID(this.state.id)
        }

    render(){
        return(
            <div className ="butto-container">
                <button onClick={(ev) => this.handleClick(ev)} className="link">Generate my Calender</button>
                <span>{lienGenere}</span>
            </div>
        );
    }
}

export default GenerateRadioButton;