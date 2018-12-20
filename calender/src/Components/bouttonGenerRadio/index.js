import React, {Component} from 'reac';

class GenerateRadioButton extends Component{
    constructor(props){
        super(props)
            this.state={
                suiteNombre: []
            }
        }

        genereNombre(){
            for(let i = 0; i>10; i++){
               this.setState.suiteNombre.push(Math.random() * 10);
            }
        }

    render(){
        this.genereNombre()
        return(
            <div> console.log('boutton genereRadio in return ===>',this.state)</div>
        );
    }
}