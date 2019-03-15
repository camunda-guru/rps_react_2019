import React,{Component} from 'react'
import axios from 'axios'
//import TableRow from './TableRow';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from './dialogcomp'

import './industries.css'
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,

        fontSize: 18
    },
    body: {
        fontSize: 18,
    },
}))(TableCell);
export class Industries extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            customers: [],
            show:false,
            customer:{}
        };
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


    showDialog=(customer)=> {
        console.log(customer);
        this.setState({ show: true });
        if(customer!=null)
        {
            this.setState({ customer: customer });

        }
    }
    closeDialog=()=> {
        //console.log(user);
        this.setState({ show: false });

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

                <Modal show={this.state.show} hide={this.closeDialog} customerInfo={this.state.customer} />

               {/* <table className="table table-striped" style={{ marginTop: 20 }}>
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
                </table>*/}

                <Table >
                    <TableHead className="TableHead">
                        <TableRow >
                            <CustomTableCell>
                                Name
                            </CustomTableCell>
                            <CustomTableCell>
                                Address
                            </CustomTableCell>
                            <CustomTableCell>
                                Email
                            </CustomTableCell>
                            <CustomTableCell>
                                PhoneNo
                            </CustomTableCell>
                            <CustomTableCell>
                                DOB
                            </CustomTableCell>
                            <CustomTableCell>
                                Edit
                            </CustomTableCell>
                            <CustomTableCell>
                                Delete
                            </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.customers.map(customer=>(
                                <TableRow key={customer.customerId} className="Table">
                                    <CustomTableCell>
                                        {customer.name}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {customer.address}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {customer.emailId}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {customer.mobileNo}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {customer.dob}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        <Button onClick={()=>{this.showDialog(customer)}}>
                                            <EditIcon/>
                                        </Button>
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        <Button>
                                            <DeleteIcon/>
                                        </Button>
                                    </CustomTableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        )

    }



}