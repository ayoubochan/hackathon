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
                <h3>Hello !</h3>
                <button className="closewindow" onClick={() => this.handleClick()}>X</button>
                <div className="flex-container">
                        <p className="option">1</p>
                        <p className="option">2</p>
                        <p className="option">3</p>
                </div>
            </div>
        )
    }
}
export default Popup;