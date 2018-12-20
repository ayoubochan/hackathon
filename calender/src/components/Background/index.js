import React, { Component } from 'react';
import "./index.css";

class Background extends Component{
    constructor(props){
        super(props);
        this.state = {
            img : "red",
        }
    }

    handleClick(className){
        this.setState({
            img : className
        })
    }
    componentDidUpdate(prefProps, prefState){
        if (prefState.img !== this.state.img){
            this.props.handleNameChange(this.state.img)
        }
        
    }

    render (){
        return(
            <div className={this.state.img ? 'open' : 'close'}>
                <h1>Choose your favourite background</h1>
                <ul className = "paterns">
                    <li className ="patern-item"> 
                        <button onClick={() => this.handleClick('red')}>
                            <img src ="https://i.goopics.net/oxDr7.jpg" alt = "red" className="red"/>
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('green')}>
                            <img src ="https://i.goopics.net/8Ye4p.jpg" alt = "green" className="green" />
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('square')}>
                            <img src ="https://i.goopics.net/0nY9q.jpg" alt = "square" className="square"/>
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('multi')}>
                            <img src ="https://i.goopics.net/2GVee.jpg" alt = "multi" className="multi" />
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('yellow')}>  
                            <img src ="https://i.goopics.net/qLDyJ.jpg" alt = "yellow" className="yellow" />
                        </button>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Background;
