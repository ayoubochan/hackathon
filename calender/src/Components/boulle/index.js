import React, { Component } from 'react';
import './index.css'

class Boule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lienMusique: "",
            open: false,
            date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({ lienMusique: event.target.value });
    }

    handleClick(elem) {
        this.props.activateChange(elem);
        this.props.activateUrl(elem);
    }
    render() {
        return (
            <li><span>{this.props.date}</span>
            <label>Inserez un titre<input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
            </label><input type="submit" value="Valider" onClick={() => this.handleClick(this.state.lienMusique)} /> </li>
        );
    }
}

export default Boule;