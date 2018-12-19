import React, {Component} from react;

class Boulle extends Component{
    constructor(props){
        super.props();
        this.state={
            lienMusique: ""

        }
    }
    
    render(){
    const BoulleAdd = <li><input type="text"></input></li>;

        return(
            {BoulleAdd}
        );
    }
}

export default Boulle