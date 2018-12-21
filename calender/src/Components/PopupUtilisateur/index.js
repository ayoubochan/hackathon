import React, { Component } from 'react';
import './index.css'

class PopupUtilisateur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
        /*this.handleClickno=this.handleClickno.bind(this);
        this.handleClickyes=this.handleClickyes.bind(this);*/
    }
    handleClick() {
        this.setState({
            isOpen: false,
        })
    }
    render() {
        return (
            <div className={this.state.isOpen ? 'popup' : ' close'}>
                <h1>You have been chosen by one of your friends <br /> to pass the Advent Calendar Blank Test!</h1>
                <h2 className="welcome"> What do you need to do:</h2>
                <button className="closewindow" onClick={() => this.handleClick()}>LET'S GO !</button>
                <div className="flex-container">
                    
                        <p className="option"><strong>Step 1</strong>: <br /> <br />Push on play and listen to the music</p>
                        <p className="option"><strong>Step 2</strong> :<br /> <br />Find the name of the music and write it in the radio</p>
                </div>
            </div>
        )
    }
}
export default PopupUtilisateur;