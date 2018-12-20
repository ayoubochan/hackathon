import React, { Component } from "react"
import Boulle from "../../Components/boulle/index"
import GenerateRadioButton from "../../Components/bouttonGenerRadio/index"

let table = []
let table2 = []

const Boules = [
    { date: "01/12" },
    { date: "02/12" },
    { date: "03/12" },
    { date: "04/12" },
    { date: "05/12" },
    { date: "06/12" },
    { date: "07/12" },
    { date: "08/12" },
    { date: "09/12" },
    { date: "10/12" },
    { date: "11/12" },
    { date: "12/12" },
    { date: "13/12" },
    { date: "14/12" },
    { date: "15/12" },
    { date: "16/12" },
    { date: "17/12" },
    { date: "18/12" },
    { date: "19/12" },
    { date: "20/12" },
    { date: "21/12" },
    { date: "22/12" },
    { date: "23/12" },
    { date: "24/12" }
]

class BouleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeLink: [],
            debut: 0,
            fin: 1,
            shareLink: []
        }
    }

    dateChange(ev) {
        this.setState({
            debut: this.state.debut + 1,
            fin: this.state.fin + 1
        })
    }

    recupURL(elem) {
        table.push(elem)
        this.setState({
            youtubeLink: table
        })
    }

    stockLink(elem) {
        table2.push(elem)
        this.setState({
            shareLink: table2
        })
        console.log(this.state.shareLink)
    }

    render() {
        const { users } = this.state;
        return (
            <ul>
                {Boules.slice(this.state.debut, this.state.fin).map((elem, index) => (
                    <Boulle key={index} date={elem.date} activateUrl={(elem) => this.recupURL(elem)} activateChange={(ev) => this.dateChange(ev)} />
                ))}

                <GenerateRadioButton activateShare={(elem) => this.stockLink(elem)} />

            </ul>
        )
    }
}

export default BouleList;