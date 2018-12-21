import React, { Component } from 'react';
import './index.css'

class Popup extends Component {
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
                <h1>Are you ready to challenge your friends <br /> with the Blank Test Advent Calendar?</h1>
                <h2 className="welcome"> Here are the instructions in 4 steps!</h2>
                <button className="closewindow" onClick={() => this.handleClick()}>L'ETS GO !</button>
                <div className="flex-container">
                    
                        <p className="option"><strong>Step 1</strong>: <br /> <br />Choose your calendar background</p>
                        <p className="option"><strong>Step 2</strong> :<br /> <br />Go on youtube and copy paste the link of a song</p>
                        <p className="option"><strong>Step 3</strong> :<br /> <br />Input the name of the song next to the URL and repeat it for the 24 days</p>
                        <p className="option"><strong>Step 4</strong> :<br /> <br />Generate a link and share it with one friend</p>
                </div>
            </div>
        )
    }
}
export default Popup;