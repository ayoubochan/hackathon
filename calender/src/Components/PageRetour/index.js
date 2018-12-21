import React, {Component} from "react"
import "./index.css"
import ListRetour from "../../Components/ListRetour/index"
import PopupUtilisateur from "../../Components/PopupUtilisateur/index"
import radio from '../../assets/images/radio.png'

class PageRetour extends Component{
    
    render(){
        return(
            <div className ='background-yellow'>
                <div className="container-patern">
                    <h1 className = 'title-calender'> Blank Test Calendar !</h1>
                </div>
                <div className="container-image">
                    <img src={radio} alt="radio" className = "radio"></img>
                    <ListRetour />
                </div> 
              
           

            <PopupUtilisateur />
                
            </div>
        )
    }
}

export default PageRetour