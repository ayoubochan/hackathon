import React, {Component} from react;

class Boulle extends Component{
    constructor(props){
        super.props();
        this.state={
            lienMusique: "",
        }
        this.handleChange = this.handleChange.bind(this);    
    }
    
handleChange(event){
    this.setState({lienMusique :event.target.value});
}
    
    componentDidUpdate(){
        //this.props
        //renvoyer le state au parent (Liste boulles)
    }


    render(){
    const BoulleAdd = <li><label>Inserez un lien youtube<input type="text" value={this.state.value} onChange={this.handleChange}></input>
    </label><input type="submit" value="Valider" onClick={}> </li>;

        return(
            {BoulleAdd}
        );
    }
}

export default Boulle