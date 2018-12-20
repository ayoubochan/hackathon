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
            <p className="title-paterns"> Choose your template here </p>
                <ul className = "paterns">
                    <li className ="patern-item"> 
                        <button onClick={() => this.handleClick('red')} className ='pattern-button'>
                            <img src ="https://i.goopics.net/oxDr7.jpg" alt = "red" className="thubnail"/>
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('green')} className ='pattern-button'>
                            <img src ="https://i.goopics.net/8Ye4p.jpg" alt = "green" className="thubnail" />
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('square')} className ='pattern-button'>
                            <img src ="https://i.goopics.net/0nY9q.jpg" alt = "square" className="thubnail"/>
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('multi')} className ='pattern-button'>
                            <img src ="https://i.goopics.net/2GVee.jpg" alt = "multi" className="thubnail" />
                        </button>
                    </li>
                    <li className ="patern-item">
                        <button onClick={() => this.handleClick('yellow')} className ='pattern-button'>  
                            <img src ="https://i.goopics.net/qLDyJ.jpg" alt = "yellow" className="thubnail" />
                        </button>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Background;
