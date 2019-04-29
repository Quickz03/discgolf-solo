import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import './AdminFormDisc.css';

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography'
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import Form from '@material-ui/core/FormControl';
// import { relative } from 'path';


// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 6,
//         overflowX: 'auto',
//     },
//     inputLabel: {
//         position: 'relative',
//     },

// });

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
        // const { classes } = this.props;
        return(
            <div>
                <h2>Admin Disc</h2>
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
                {/* <InputLabel className={classes.inputLabel} htmlFor="types">Select a Type</InputLabel>     */}
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
                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        );
    }
}

// AdminFormDisc.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect(mapReduxStateToProps)(AdminFormDisc);