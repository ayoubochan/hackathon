import React, {Component} from "react"
import "./index.css"
import Background from '../../Components/Background/index';
import BouleList from "../../Components/BouleList/index"
import Popup from '../../Components/Popup/index';
import radio from '../../assets/images/radio.png'

class PageAccueil extends Component{
    constructor(props){
        super(props);
        this.state = {
          img : 'green'
        }
      }
    
      handleNameChange(img){
        this.setState({ 
          img : img
        });
      }

    render(){
        return(
            <div className={this.state.img}>
              
              <Background handleNameChange={(className) => this.handleNameChange(className)}/>

              <div className="container-image">
                <img src={radio} alt="radio" className = "radio"></img>
                <BouleList />
              
              </div> 
              
           

            <Popup />
            </div>    
        )
    }
}

export default PageAccueil