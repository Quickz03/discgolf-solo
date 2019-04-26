import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Form from '@material-ui/core/FormControl';

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
                <Typography variant="headline">Admin Disc</Typography>
                <Form onSubmit={this.handleSubmit} >
                    <TextField type="text" placeholder="Disc Name" name="name"
                            onChange={this.handleChange} />
                    <br /> 
                    <TextField type="text" placeholder="Plastic" name="plastic"
                            onChange={this.handleChange} />
                    <br /> 
                    <TextField type="text" placeholder="Disc Image" name="image"
                            onChange={this.handleChange} />
                    <br />        
                    <Select onChange={this.handleChange} name="type" 
                            >
                        <InputLabel htmlFor="type">Select a Type</InputLabel>
                            {this.props.reduxState.types.map( discType => 
                                <option value={discType.id} key={discType.id}>{discType.name}</option>
                            )}
                    </Select>
                    <br />
                    <TextField type="text" placeholder="Speed" name="speed"
                            onChange={this.handleChange} />
                    <br /> 
                    <TextField type="text" placeholder="Glide" name="glide"
                            onChange={this.handleChange} />
                    <br />
                    <TextField type="text" placeholder="Turn" name="turn"
                            onChange={this.handleChange} />
                    <br />
                    <TextField type="text" placeholder="Fade" name="fade"
                            onChange={this.handleChange} />
                    <br />
                    <br /> 
                    <Button color="secondary" variant="contained" type="submit" >Add Disc</Button>
                </Form>
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect( mapReduxStateToProps )(AdminFormDisc);