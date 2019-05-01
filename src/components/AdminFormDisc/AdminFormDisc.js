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
                <h2 className="adminHead">Admin Disc</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Disc Name" name="name"
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Plastic" name="plastic"
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Disc Image" name="image"
                            onChange={this.handleChange} />
                    <br />   
                    <select onChange={this.handleChange} name="type">  
                        <option selected disabled >Select a Tag</option>
                            {this.props.reduxState.types.map( discType => 
                                <option value={discType.id} key={discType.id}>{discType.name}</option>
                            )}
                    </select>
                    <br />
                    <input type="text" placeholder="Speed" name="speed"
                            onChange={this.handleChange} />
                    <br /> 
                    <input type="text" placeholder="Glide" name="glide"
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Turn" name="turn"
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Fade" name="fade"
                            onChange={this.handleChange} />
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