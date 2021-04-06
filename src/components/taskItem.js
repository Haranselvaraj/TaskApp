import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputActions from "../redux/actions/inputActions";
import taskActions from "../redux/actions/taskActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const TaskItem = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(item.id));
    dispatch(inputActions.setInputDescription(item.task_msg));
    dispatch(inputActions.setInputDate(item.task_date));
    dispatch(
      inputActions.setInputTime(
        `${new Date(item.task_time).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}`
      )
    );
  };

  

  if (tasks.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>{"There is no note yet. Please add one."}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{"Tasks"}</h2>
      <Grid container spacing={2}>
        {tasks.map((item, index) => {
          if (item) {
            return (
              <Grid item xs={4} key={item.id}>
                <Card
                  elevation={3}
                  key={item.id}
                  style={{ width: 400, padding: 25, paddingTop: 1 }}
                >
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="Task description"
                          fullWidth
                          variant="outlined"
                          defaultValue={item.task_msg}
                          inputProps={{ readOnly: true }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          label="Date"
                          type="text"
                          defaultValue={item.task_date}
                          inputProps={{ readOnly: true }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="outlined"
                          inputProps={{ readOnly: true }}
                          fullWidth
                          label="Time"
                          type="text"
                          defaultValue={`${new Date(
                            item.task_time
                          ).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}`}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    style={{
                      float: "right",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        onItemClicked(item, index);
                      }}
                    >
                      {"Edit"}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        dispatch(taskActions.requestDeleteTask(item.id, item))
                      }}
                    >
                      {"Delete"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </div>
  );
};

export default TaskItem;
