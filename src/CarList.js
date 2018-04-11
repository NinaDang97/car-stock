import React, { Component } from 'react';
import ShowCar from './ShowCar';
import AddCar from './AddCar';
import EditCar from './EditCar';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css 
import { ToastContainer, toast } from 'react-toastify';

class CarList extends Component{
    constructor(props){
        super(props);
        this.state = {
            cars: [],
            car: {}
        }
    }

    componentDidMount(){
        this.loadCars();
    }

    loadCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => this.setState({cars: data._embedded.cars}))
        .catch(err => console.log("Loading Cars Error: ", err))
    }

    deleteCar = (deletedCarLink) => {
        confirmAlert({
            title: 'Delete Car Stock',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Sure',
                    onClick: () => {
                        fetch(deletedCarLink, {
                            method: 'DELETE'
                        })
                        .then(res => this.loadCars()) //load page again when deleted
                        .catch(err => console.log("Delete Error: ", err))

                        //add notification after delete
                        toast.success("Delete succeeded!", {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                },
                {
                    label: 'Cancel',
                    onClick: () => {
                        toast.info("You have not deleted yet.", {
                            position: toast.POSITION.TOP_CENTER
                        })
                    }
                }
            ]
        })
    }

    addNewCar = (newCar) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCar)
        })
        .then(res => this.loadCars())
        .catch(err => console.log("Add new car error: ", err))
    }

    editCar = (carLink, updatedCar) => {
        fetch(carLink, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedCar)
        })
        .then(res => this.loadCars())
        .catch(err => console.log("Edit Car Error: ", err))
    }

    render(){
        const car = [
            {
                Header: "Id",
                accessor: "_links.self.href",
                show: false
            },
            {
                Header: 'Brand',
                accessor: 'brand'
            },
            {
                Header: 'Model',
                accessor: 'model'
            },
            {
                Header: 'Color',
                accessor: 'color'
            },
            {
                Header: 'Fuel',
                accessor: 'fuel'
            },
            {
                Header: 'Year',
                accessor: 'year'
            },
            {
                Header: 'Price',
                accessor: 'price'
            },
            //Show specific car
            {
                id: 'button',
                accessor: '_links.self.href',
                sortable: false,
                filterable: false,
                width: 100,                
                Cell: ({row}) => <ShowCar car={row} /> 
                //row: brand, model, color, ..., accessor
                //value: = accessor (e.g. 'https://carstockrest.herokuapp.com/cars/1')
                //props: ?
            },
            //Edit specific car
            {
                id: 'button',
                accessor: '_links.self.href',
                sortable: false,
                filterable: false,
                width: 100,    
                Cell: ({value, row}) => <EditCar car={row} value={value} editCar={this.editCar} />     
            },
            //Delete specific car
            {
                id: 'button',
                accessor: '_links.self.href',
                sortable: false,
                filterable: false,
                width: 100,    
                Cell: ({value}) => <button onClick={() => this.deleteCar(value)}>Delete</button>      
            }
        ];

        return(
            <div className="App-body">
                <ToastContainer />
                <AddCar addNewCar={this.addNewCar} />
                <ReactTable data={this.state.cars} columns={car} 
                    defaultPageSize={10}
                    filterable
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default CarList;