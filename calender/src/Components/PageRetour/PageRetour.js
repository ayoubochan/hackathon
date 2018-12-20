import React, {Component} from 'react';
import ListeRetour from './Component/ListeRetour';
import PopUpRetour from './Component/PopUpRetour'

class PageRetour extends Component{

    render(){
        return(
            <div>
                <ListeRetour />
                <PopUpRetour />
            </div>
        )
    }
}