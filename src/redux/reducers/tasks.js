import actionTypes from '../actionTypes';

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch(action.type) {

    case actionTypes.ADD_TASK: {
      const tasks = [...state.tasks];
      tasks.push(action.task);
      return {
        tasks,
      }
    }

    case actionTypes.ADD_ALL: {
      const {tasks} = action;
      return {
        tasks,
      }
    }

    case actionTypes.UPDATE_TASK: {
      const { index, task } = action;
      const tasks = [...state.tasks];
      tasks[index] = task;
      return {
        tasks,
      }
    }

    case actionTypes.DELETE_TASK: {
      const { task } = action;
      const tasks = [];

      console.log("THE TASK", task);
      
      state.tasks.forEach((t, i) => {
          console.log(t.id);
        if(task.id !== t.id) {
          tasks.push(t)
        }
      })      
      return {
        tasks,
      }
    }

    default:
      return state;
  }
}