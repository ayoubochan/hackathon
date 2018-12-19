import React, { Component } from 'react';
import './index.css'

class Boule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lienMusique: "",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({ lienMusique: event.target.value });
    }

    handleClick(elem) {
        this.props.activateUrl(elem);
    }

    /*ouvre et ferme lorsqu'on clique*/
    handleClickon() {
        this.setState({
            open: true
        })
    }
    handleClickoff() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div className={this.state.open ? 'cercle' : 'close'}>
                <div className="App-cercle">
                    <button className="btn" onClick={() => this.handleClickoff()}>Press</button>
                    <ul className="url">
                        <li><label>Inserez un lien youtube<input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label><input type="submit" value="Valider" onClick={() => this.handleClick(this.state.lienMusique)} /> </li>
                    </ul>
                </div>
                <button className="btn1" onClick={() => this.handleClickon()}>Press</button>
            </div>
        );
    }
}

export default Boule;