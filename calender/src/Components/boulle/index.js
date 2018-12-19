import React, {Component} from react;

class Boulle extends Component{
    constructor(props){
        super.props();
        this.state={
            lienMusique: ""

        }
        this.handleChange = this.handleChange.bind(this);    
    }
    
handleChange(event){
    this.setState({lienMusique :event.target.value});
}
    
    componentDidMount(){
        //this.props
        //renvoyer le state au parent (Liste boulles)
    }


    render(){
    const BoulleAdd = <li><input type="text" value={this.state.value} onChange={this.handleChange}></input></li>;

        return(
            {BoulleAdd}
        );
    }
}

export default Boulle