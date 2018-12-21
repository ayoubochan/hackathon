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
                <h1 className="welcome">Are you ready to challenge your friends with the Blank Test Advent Calender?</h1>
                <h2> Here are the instructions in 4 steps!</h2>
                <button className="closewindow" onClick={() => this.handleClick()}>GO !</button>
                <div className="flex-container">
                    
                        <p className="option"><strong>Step 1</strong>: <br /> <br />Choose your calender background</p>
                        <p className="option"><strong>Step 2</strong> :<br /> <br />Go on youtube and copy paste the link of a song</p>
                        <p className="option"><strong>Step 3</strong> :<br /> <br />Input the name of the song next to it URL and repeat for the 24 days</p>
                        <p className="option"><strong>Step 4</strong> :<br /> <br />Generate a link and share it with one friend</p>
                </div>
            </div>
        )
    }
}
export default Popup;