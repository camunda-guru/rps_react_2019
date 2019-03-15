import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import {CustomerDetails} from './customerdetails'
const modal=({show,hide,customerInfo})=>(
    <Dialog
        open={show}
        onClose={hide}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Customer Form</DialogTitle>
        <DialogContent>
            <DialogContentText>


            </DialogContentText>
            <CustomerDetails customer={customerInfo}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={hide} color="primary">
                <CloseIcon/>
            </Button>

        </DialogActions>
    </Dialog>
);

export default modal