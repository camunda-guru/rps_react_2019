import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './solutions.css'
import TextField from '@material-ui/core/TextField'
//import Fab from '@material-ui/core/Fab';
//import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'
import axios from 'axios';
const apiUrl = 'https://customer-cf.cfapps.io';
export class Solutions extends Component
{

    constructor(props)
    {
         super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
        this.onChangeEmailId = this.onChangeEmailId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            address: '',
            emailId:'',
            mobileNo:0,
            dob:''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onChangeDOB(e) {
        this.setState({
            dob: e.target.value
        })
    }

    onChangeEmailId(e) {
        this.setState({
            emailId: e.target.value
        })
    }
    onChangeMobileNo(e) {
        this.setState({
            mobileNo: e.target.value
        })
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('[Create.js] will receive props', nextProps);

    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('[Create.js] will update',nextProps,nextState)
        return true;
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            address: this.state.address,
            dob: this.state.dob,
            emailId:this.state.emailId,
            mobile:this.state.mobileNo
        };
        console.log(obj);
        // axios.post('http://localhost:4000/business/add', obj)
        //     .then(res => console.log(res.data));
        axios.post(`${apiUrl}/addcustomer`, obj)
            .then(response =>
                console.log(response.data)
            )
            .catch(error => {
                throw(error);
            });
        this.setState({
            name: '',
            address: '',
            emailId:'',
            mobileNo:0,
            dob:''
        })
    }


    render(){

        return(
            <Paper className="paperStyle">
                <form onSubmit={this.onSubmit}>
                    <TextField fullWidth margin="dense" 
                               required label="Name"
                               value={this.state.name}
                               onChange={this.onChangeName}
                    />

                    <TextField fullWidth margin="dense"
                               required  multiline rows="5"
                               label="Address" value={this.state.address}
                               onChange={this.onChangeAddress}
                    />

                    <TextField  fullWidth margin="dense" required label="DOB"
                                value={this.state.dob}
                                onChange={this.onChangeDOB}/>

                    <TextField  fullWidth margin="dense" required label={"Email"}
                                value={this.state.emailId}
                                onChange={this.onChangeEmailId}
                    />
                    <TextField  fullWidth margin="dense" required label={"Mobile No"}
                                value={this.state.mobileNo}
                                onChange={this.onChangeMobileNo}/>
                   {/* <Fab color="primary" aria-label="Add" className="fabStyle">
                        <AddIcon />
                    </Fab>*/}

                    <div className="form-group">
                        <input type="submit"
                               value="Register Customer"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </Paper>

        )

    }



}