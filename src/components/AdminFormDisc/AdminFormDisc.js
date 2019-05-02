import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import './AdminFormDisc.css';


const emptyDisc = {
    name: '',
    plastic: '',
    type: '',
    speed: '',
    glide: '',
    turn: '',
    fade: '',
    image: '',
}

class AdminFormDisc extends Component {

    state = {
        newDisc: {
            name: '',
            plastic: '',
            type: '',
            speed: '',
            glide: '',
            turn: '',
            fade: '',
            image: '',
        }
    }


    

    componentDidMount() {
        this.props.dispatch( {type: 'GET_TYPES'} );
    }
    
    handleChange = (event) => {
        // console.log( `in handleChange`, this.state.newDisc );
        this.setState({
            newDisc: {
                ...this.state.newDisc,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log( `in handleSubmit` );
        // TODO! POST new disc to DB
        this.props.dispatch( {type: 'ADD_DISCS', payload: this.state.newDisc} );
        this.setState({
            newDisc: {
                ...emptyDisc
            }
        })
    }

    render(){
        return(
            <div>
                <h1 className="adminHead">Admin Disc</h1>
                <form className="adminForm" onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Disc Name" name="name"
                            value={this.state.newDisc.name}
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Plastic" name="plastic"
                            value={this.state.newDisc.plastic}
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Disc Image" name="image"
                            value={this.state.newDisc.image}
                            onChange={this.handleChange} />
                    <br />   
                    <input type="text" placeholder="Speed" name="speed"
                            value={this.state.newDisc.speed}
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Glide" name="glide"
                            value={this.state.newDisc.glide} 
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Turn" name="turn"
                            value={this.state.newDisc.turn}
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Fade" name="fade"
                            value={this.state.newDisc.fade}
                            onChange={this.handleChange} />
                    <br />
                    <select className="typeSelect" onChange={this.handleChange} name="type">
                        <option selected disabled >Select a Tag</option>
                        {this.props.reduxState.types.map(discType =>
                            <option value={discType.id} key={discType.id}>{discType.name}</option>
                        )}
                    </select>
                    <br />
                    <br /> 
                    <button color="secondary" variant="contained" type="submit" >Add Disc</button>
                </form>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect(mapReduxStateToProps)(AdminFormDisc);