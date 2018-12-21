import React, { Component } from 'react';
import "./index.css";
import Video from '../Video/index';
import { withRouter } from "react-router";

class BoulleRetour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            youtube: [],
            number: 0,
            reponse: ''
        }
    }

    componentDidMount() {
        var url = this.props.location.pathname;
        var id = url.substring(17, url.length);
        fetch(`http://localhost:4000/api/calendrier/youtube?ID_partagelink=${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    youtube: data.data,
                })
                console.log(data.data)
            })
    }
/// On compare les réponses, on appelle la fonction seulement quand le composant est update
    compareReponse(){
        if(this.state.reponse.includes(this.props.rep)){
            console.log('Bien joué');
        }
        else{
           console.log('mauvaise réponse');
        }
    }
    
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
        this.compareReponse()
    }

    render() {
        const video = this.state.youtube.map((elem, index) => <Video
            key={index} rep={elem.Reponse} video={ elem.Link.substring(32, 43) + '?start=10&end=20' + ';version=3&enablejsapi=1'} />);
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

export default withRouter(BoulleRetour);