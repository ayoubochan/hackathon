import React, { Component } from 'react';
import './index.css'

class Boule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lienMusique: "",
            open: false,
            reponse:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)

        this.baseState = this.state 
    }

    handleChange(event) {
        this.setState({ reponse: event.target.value });
    }
    handleChangeLien(event){
        this.setState({ lienMusique: event.target.value });
    }

    handleClick(elem) {
        this.props.activateChange(elem);
        this.props.activateUrl(elem);
        this.setState(this.baseState);

    }
    render() {
        return (
            <li><span>{this.props.date}</span>
            <label>Inserez un lien youtube<input type="text" value={this.state.value} onChange={(event) =>this.handleChangeLien(event)} />
            Inserez la réponsse attendue <input type='text' value={ this.state.value} onChange={(event) =>this.handleChange(event)} />
            </label><input type="submit" value="Valider" onClick={() => this.handleClick(this.state)} /> </li>
        );
    }
}

export default Boule;