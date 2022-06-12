import React, {Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render(){
        return(
            <div className="character-card">
            <img src={`${this.props.data.image}`} alt="" />
            <h4>{this.props.data.name}</h4>
            <p>Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae molestias? Deleniti vel suscipit voluptatem mollitia vitae. Placeat, incidunt?</p>
            <p className='more'>Ver más</p>
        </div>
        )
    }
}

export default Card