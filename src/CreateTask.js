import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import { useState } from 'react';
const CreateTask = ({open,handleClose}) => {
    const [description,setDescription]=useState('');
    const [Date,setDate]=useState("2017-05-24");
    const [Time,setTime]=useState("07:00");
    const closeModal = () => {
        handleClose();
      }
    return ( 
     <div>
         <Dialog open={open} onClose={closeModal}>
         <DialogTitle >Create Task</DialogTitle>
         <DialogContent>
        
         
         <Grid container spacing={2}>
             <Grid item xs={12}>
                 <TextField fullWidth label="Task description" variant="outlined" value={description}
         onChange={(e) => setDescription(e.target.value)} />
             </Grid>
             <Grid item xs={6}>
             <TextField
        id="date"
        variant="outlined"
        fullWidth
        label="Date"
        type="date"
        defaultValue={Date}
        onChange={(e)=>setDate(e.target.value)}
        
        InputLabelProps={{
          shrink: true,
        }}
      />

             </Grid>
             <Grid item xs={6}>
             <TextField
             variant="outlined"
        id="date"
        label="Date"
        type="time"
        value={Time}
        onChange={(e)=>setTime(e.target.value)}
        
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
             </Grid>

         </Grid>

         </DialogContent>
         <DialogActions>
         <Button variant="contained" color="primary">
            Save
          </Button>
         <Button variant="contained" onClick={closeModal} color="primary">
            Cancel
          </Button>
         </DialogActions>


         </Dialog>
     </div>
     );
}
 
export default CreateTask;