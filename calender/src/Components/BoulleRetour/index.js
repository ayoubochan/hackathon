import React, { Component } from 'react';
import "./index.css"

class BoulleRetour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            youtube: [],
            number: 0,
            reponse: ''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/calendrier/youtube?ID_partagelink=${this.state.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    youtube: data.data,
                })
                console.log(data.data)
            })
    }
/// On compare les réponses, on appelle la fonction seulement quand le composant est update
 /*   compareReponse(){
        if(this.state.reponse === data.response){
            return 'Bien joué';
        }
        else{
            return 'mauvaise réponse';
        }
    }
*/
    componentDidUpdate(prevProps, prevState){
        if(prevState.number !== this.state.number){
     //       compareReponse()
        }
    }


    transfer(ev) {
        this.props.activateChange(ev)
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        const video = this.state.youtube.map((elem, index) => <div
            key={index} rep={elem.Reponse}> Vidéo : {elem.Link} </div>);
        return (
            <li><span>{this.props.date}</span>
                {video[this.state.number]}
                <span>Donne ta réponse</span>
                <input type="text" onChange={this.state.reponse} />
                <button onClick={(ev) => this.transfer(ev)}>Ok</button>
            </li>
        )
    }
}

export default BoulleRetour