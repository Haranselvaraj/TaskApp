import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import taskActions from "../redux/actions/taskActions";
import inputActions from "../redux/actions/inputActions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import actionTypes from "../redux/actionTypes";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const description = useSelector((state) => state.inputs.description);
  const date = useSelector((state) => state.inputs.date);
  const time = useSelector((state) => state.inputs.time);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(time);
    dispatch(taskActions.requestAllTask());
  }, [time]);

  const addTask = () => {
    if (description && date && time) {
      dispatch(
        taskActions.requestAddTask({
          description,
          date,
          time,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const updateTask = () => {
    if (description && date && time) {
      console.log(id);

      dispatch(
        taskActions.requestUpdateTask(id, {
          description,
          date,
          time,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const deleteTask = () => {
    console.log(id);
    dispatch(
      taskActions.requestDeleteTask(id, {
        id,
        description,
        date,
        time,
      })
    );
    dispatch(inputActions.resetInputs());
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Paper
          elevation={3}
          style={{ width: 400, margin: 25, padding: 25, paddingTop: 1 }}
        >
          <h2>{"Task"}</h2>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Task description"
                fullWidth
                variant="outlined"
                value={description}
                onChange={(e) =>
                  dispatch(inputActions.setInputDescription(e.target.value))
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                variant="outlined"
                fullWidth
                label="Date"
                type="date"
                value={date}
                onChange={(e) =>
                  dispatch(inputActions.setInputDate(e.target.value))
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                id="date"
                fullWidth
                label="Time"
                type="time"
                value={time}
                onChange={(e) =>
                  dispatch(inputActions.setInputTime(e.target.value))
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={id === -1 ? addTask : updateTask}
              >
                {id === -1 ? "ADD TASK" : "UPDATE TASK"}
              </Button>
            </Grid>
            <Grid item xs={6}>
              {id !== -1 && (
                <Button
                  onClick={deleteTask}
                  variant="contained"
                  color="primary"
                >
                  {"DELETE TASK"}
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default InputSection;
