import React,{Component} from 'react'
import axios from 'axios'
import TableRow from './TableRow';
export class Industries extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {customers: []};
    }

    componentDidMount()
    {

        axios.get('https://rpscustomer-cf.cfapps.io/getcustomers')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.customers.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
    render(){

        console.log(this.state.customers);
        return(
            <div>
                <h3 align="center">Customers List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>MobileNo</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )

    }



}