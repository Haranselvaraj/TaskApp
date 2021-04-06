import actionTypes from "../actionTypes";
import axios from "axios";
import tasks from "../reducers/tasks";

const authToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTc2MzA2NzQsIm5iZiI6MTYxNzYzMDY3NCwianRpIjoiMDVmMTU3NDMtMmMzMS00NDFkLWFhZjYtOWFiZDg1MzFiZDMyIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZWFtIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MkBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8xNWY0ODA4YTc3MTk0YmU4OGM4ZDE5NDE0NjcxZDNjOCIsImNvbXBhbnlfaWQiOiJjb21wYW55XzRhZDBkMzA2YmE5MjRiYmY4MWNhY2NkODA0MWVkY2IwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8wNWFlOGJhYWRjYzE0NGRjZThmZWNjNzI1MWNkOThjZT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.3AJm6vm3LkfhrT8f7OFsztEjUnd3kYFylVevnR_ZyBc";
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

export default {
  requestAllTask: () => {
    return (dispatch) => {
      const body = {};
      axios
        .get(
          "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
          body
        )
        .then((res) => {
          console.log(res);
          let responseData = res.data;
          if (responseData.code === 200) {
            dispatch(addAll(responseData.results));
            console.log(responseData);
          } else {
            throw new Error(responseData.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  requestAddTask: (task) => {
    console.log(task);
    return (dispatch) => {
      const body = {
        assigned_user: "user_15f4808a77194be88c8d19414671d3c8",
        task_time: new Date(`${task.date} ${task.time}`).getTime(),
        task_date: task.date,
        task_msg: task.description,
        is_completed: 0,
      };
      axios
        .post(
          "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
          body
        )
        .then((res) => {
          console.log(res);
          let responseData = res.data;
          if (responseData.code === 201) {
            dispatch(addTask(responseData.results));
          } else {
            throw new Error(responseData.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  requestUpdateTask: (id, task) => {
    console.log(task.time);
    return (dispatch) => {
      const body = {
        assigned_user: "user_15f4808a77194be88c8d19414671d3c8",
        task_date: task.date,
        task_time: new Date(`${task.date} ${task.time}`).getTime(),
        task_msg: task.description,
        is_completed: 1,
      };
      axios
        .put(
          "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
            id,
          body
        )
        .then((res) => {
          console.log(res);
          dispatch(updateTask(task));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  requestDeleteTask: (id, task) => {
    console.log(id);
    return (dispatch) => {
      const body = {};

      axios
        .delete(
          "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
            id,
          body
        )
        .then((res) => {
          console.log(res);
          dispatch(deleteTask(task));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
};
export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  task,
});
export const updateTask = (index, task) => ({
  type: actionTypes.UPDATE_TASK,
  index,
  task,
});
export const deleteTask = (task) => ({
  type: actionTypes.DELETE_TASK,
  task,
});
export const addAll = (tasks) => ({
  type: actionTypes.ADD_ALL,
  tasks,
})