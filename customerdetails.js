import React,{Component} from 'react';



export class CustomerDetails extends Component
{

    constructor(props)
    {
        super(props);
        this.state={

            cust:this.props.customer
        }

    }
    submit=(e)=>{
        e.preventDefault();
        console.log(this.state.cust);
        let reqData=this.state.cust;


    }

    render()
    {
        return(
            <Paper className="paperStyle">
                <h3 align="center">Add Customer</h3>
                <form onSubmit={this.onSubmit}>
                    <TextField fullWidth margin="dense"
                               required label="Name"
                               value={this.state.name}

                    />

                    <TextField fullWidth margin="dense"
                               required  multiline rows="5"
                               label="Address" value={this.state.address}

                    />

                    <TextField  fullWidth margin="dense" required label="DOB"
                                value={this.state.dob}
                                />

                    <TextField  fullWidth margin="dense" required label={"Email"}
                                value={this.state.emailId}

                    />
                    <TextField  fullWidth margin="dense" required label={"Mobile No"}
                                value={this.state.mobileNo}
                                />
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