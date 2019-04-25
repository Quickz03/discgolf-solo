import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography'


const emptyDisc = {
    name: '',
    plastic: '',
    type: '',
    speed: '',
    glide: '',
    turn: '',
    fade: '',
    disc_type: '',
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
            disc_type: '',
        }
    }

    componentDidMount() {
        this.props.dispatch( {type: 'GET_TYPE'} );
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
            <h1>Admin Disc</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Disc Name" name="name"
                            onChange={this.handleChange} />
                    <input type="text" placeholder="Plastic" name="plastic"
                            onChange={this.handleChange} />
                    <input type="text" placeholder="Disc Image" name="image"
                            onChange={this.handleChange} />
                    <select onChange={this.handleChange} name="type" >
                        <option selected disabled >Select a Type</option>
                        {this.props.reduxState.types.map( type => 
                            <option  value={type.id} key={type.id}>{type.name}</option>
                            )}
                    </select>
                    <br />
                    <input type="text" placeholder="Speed" name="speed"
                            onChange={this.handleChange} />
                    <input type="text" placeholder="Glide" name="glide"
                            onChange={this.handleChange} />
                    <br />
                    <input type="text" placeholder="Fade" name="fade"
                            onChange={this.handleChange} />
                    <br />
                    <button type="submit" >Add Disc</button>
                </form>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(AdminFormDisc);