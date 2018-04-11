import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class AddCar extends Component{
    constructor(props){
        super(props);
        this.state = {
            brand: '',
            model: '',
            color: '',
            fuel: '',
            year: 0,
            price: 0
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault();
        const newCar = {
            brand: this.state.brand,
            model: this.state.model,
            color: this.state.color,
            fuel: this.state.fuel,
            year: this.state.year,
            price: this.state.price
        }

        this.props.addNewCar(newCar);
        
        this.simpleDialog.hide();
       
    }

    render(){
        return(
           <div>
                <button onClick={() => {
                    this.simpleDialog.show();
                }}>Add New Car</button>
            
                <SkyLight 
                    hideOnOverlayClicked 
                    ref={ref => this.simpleDialog = ref}
                    title="Add a new car">
                    <form>
                        <div className="form-group">
                            <label>Brand: </label>
                            <input className="form-control" name="brand" onChange={this.handleChange} value={this.state.brand} />
                        </div>
                        <div className="form-group">
                            <label>Model: </label>
                            <input className="form-control" name="model" onChange={this.handleChange} value={this.state.model} />
                        </div>
                        <div className="form-group">
                            <label>Color: </label>
                            <input className="form-control" name="color" onChange={this.handleChange} value={this.state.color} />
                        </div>
                        <div className="form-group">
                            <label>Year: </label>
                            <input className="form-control" name="year" onChange={this.handleChange} value={this.state.year} />
                        </div>
                        <div className="form-group">
                            <label>Price: </label>
                            <input className="form-control" name="price" onChange={this.handleChange} value={this.state.price} />
                        </div>
                        <div className="form-group">
                            <label>Fuel: </label>
                            <input className="form-control" name="fuel" onChange={this.handleChange} value={this.state.fuel} />
                        </div>
                        <div className="form-group">
                            <button onClick={this.submitForm}>Submit</button>
                        </div>
                    </form>
                </SkyLight>
            </div>
        )
    }
}

export default AddCar;