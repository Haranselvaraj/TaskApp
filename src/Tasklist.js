import Button from '@material-ui/core/Button';
import CreateTask from './CreateTask.js';
import { useState } from 'react';
const Tasklist = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>


      <div className="taskContainer" style={{marginTop: 100}}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          {"Create Task"}
        </Button>
        <CreateTask open={open} handleClose={handleClose} />
      </div>
      <div className="taskList">
       
      </div>

    </>
  );
}

export default Tasklist;