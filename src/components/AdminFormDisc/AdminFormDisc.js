import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import './AdminFormDisc.css';


const emptyDisc = {
    name: 'Boss',
    plastic: 'Champion',
    type: '1',
    speed: '13',
    glide: '5',
    turn: '-1',
    fade: '3',
    image: '/images/BossDisc.png',
}

class AdminFormDisc extends Component {

    state = {
        newDisc: {
            name: '',
            image: '',
            speed: '',
            glide: '',
            turn: '',
            fade: '',
            plastic: '',
            type: '',
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


    // editDisc = (disc) => {
    //     console.log('showing disc');
    //     console.log('disc data:', this.props.reduxState.discs);
    //     this.setState({
    //         newDisc: {
    //         name: disc.name,
    //         image: disc.image,
    //         speed: disc.speed,
    //         glide: disc.glide,
    //         turn: disc.turn,
    //         fade: disc.fade,
    //         plastic: disc.plastic,
    //         type: disc.type,           
    //         }
    //     })
    // }

    autoFill = () => {
        console.log(`in autofill`);
        this.setState({
            newDisc: {
                ...emptyDisc
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log( `in handleSubmit` );
        // TODO! POST new disc to DB
        this.props.dispatch( {type: 'ADD_DISCS', payload: this.state.newDisc} );
        alert("The disc has been added to the library!");
        this.setState({
            newDisc: {
                ...emptyDisc
            }
        })
    }

    render(){
        return(
            <div>
                <h1 className="adminHead">Admin</h1>
                <form className="adminForm" onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Disc Name" name="name"
                            value={this.state.newDisc.name}
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
                    <input type="text" placeholder="Plastic" name="plastic"
                        value={this.state.newDisc.plastic}
                        onChange={this.handleChange} />
                    <br />
                    <select className="typeSelect" onChange={this.handleChange} name="type">
                        <option>Select a Type</option>
                        {this.props.reduxState.types.map(discType =>
                            <option value={discType.id} key={discType.id}>{discType.name}</option>
                        )}
                    </select>
                    <br />
                    <button className="addButton" type="submit" >Add Disc</button>
                </form>
                <button className="autofill" onClick={this.autoFill} >Add values</button>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  
  export default connect(mapReduxStateToProps)(AdminFormDisc);