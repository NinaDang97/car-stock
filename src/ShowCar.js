import React, { Component } from 'react';
import SkyLight from 'react-skylight';


class ShowCar extends Component{
    constructor(props){
        super(props);
        this.state = {
            brand: this.props.car.brand,
            model: this.props.car.model,
            color: this.props.car.color,
            fuel: this.props.car.fuel,
            year: this.props.car.year,
            price: this.props.car.price
        }
    }

    render(){
        const title = this.state.brand + ' ' + this.state.model + ' (' + this.state.year + ')';
        return (
            <div>
                <button onClick={() => {
                    this.simpleDialog.show();
                }}>Show</button>
               
                <SkyLight 
                    hideOnOverlayClicked 
                    ref={ref => this.simpleDialog = ref}
                    title={title}>
                    Date: 11/4/2018 <br />
                    Seller: Khanh Dang <br />
                    Price: {this.state.price} <br />
                    Fuel: {this.state.fuel}
                </SkyLight>

            </div>
        )
    }
}

export default ShowCar;