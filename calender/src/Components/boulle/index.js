import React, { Component } from 'react';
import './index.css'

class Boule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lienMusique: "",
            open: false,
            reponse: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)

        this.baseState = this.state
    }

    handleChange(event) {
        this.setState({ reponse: event.target.value });
    }
    handleChangeLien(event) {
        this.setState({ lienMusique: event.target.value });
    }

    handleClick(elem) {
        this.props.activateChange(elem);
        this.props.activateUrl(elem);
        this.setState(this.baseState);

    }
    render() {
        return (
            <li className="affiche-date">
                <span className="date">{this.props.date}</span>
                <div className="enoncer">
                    <label className='enoncer-item'>+ Add a Youtube link</label>
                    <input type="text" value={this.state.value} onChange={(event) => this.handleChangeLien(event)} />
                    <label className='enoncer-item'>+ Add the expected answer</label>
                    <input type='text' value={this.state.value} onChange={(event) => this.handleChange(event)} />
                </div>
                <input type="submit" value="ok" onClick={() => this.handleClick(this.state)} className="bouton-valider" />
            </li>

        );
    }
}

export default Boule;