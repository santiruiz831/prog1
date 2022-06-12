import React, {Component} from "react";

class filterField extends Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
    }

    capturarDatos(datos){
        this.setState({
            value: datos.target.value
        },
        ()=> this.props.filtrarPersonajes(this.state.value))
    }

    render(){
        console.log(this.props)
        return(
            <form>
                <input onChange={(datos) => this.capturarDatos(datos)} type='text' value={this.state.value}></input>
            </form>
        )
    }

}

export default filterField