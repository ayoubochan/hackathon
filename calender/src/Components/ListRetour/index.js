import React, {Component} from "react"
import "./index.css"
import BoulleRetour from "../../Components/BoulleRetour/index"

const dates = [
    {date: "01/12"},
    {date: "02/12"},
    {date: "03/12"},
    {date: "04/12"},
    {date: "05/12"},
    {date: "06/12"},
    {date: "07/12"},
    {date: "08/12"},
    {date: "09/12"},
    {date: "10/12"},
    {date: "11/12"},
    {date: "12/12"},
    {date: "13/12"},
    {date: "14/12"},
    {date: "15/12"},
    {date: "16/12"},
    {date: "17/12"},
    {date: "18/12"},
    {date: "19/12"},
    {date: "20/12"},
    {date: "21/12"},
    {date: "22/12"},
    {date: "23/12"},
    {date: "24/12"}
]
let day = new Date();
let month = new Date();

class ListRetour extends Component{
    constructor(props){
        super(props);
        this.state = {
            debut: 0,
            fin: 1
        }
    }

    dateChange(ev) {
        if(this.state.fin < day.getDate() && month.getMonth() === 11 ){
            this.setState({
                debut: this.state.debut + 1,
                fin: this.state.fin + 1
            })
    }
    }

    render(){
        return(
            <ul>
                {dates.slice(this.state.debut, this.state.fin).map((elem, index) => (
                <BoulleRetour key={index} date={elem.date} activateChange={(ev) => this.dateChange(ev)} />
            ))}

            <button>Go listen your Playlist !</button>
            </ul>
        )
    }
}

export default ListRetour