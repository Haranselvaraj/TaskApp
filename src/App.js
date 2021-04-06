import AppBar from '@material-ui/core/AppBar';
import Tasklist from './Tasklist.js';
import { Provider } from 'react-redux';
import TaskItem from './components/taskItem';
import store from './redux/createStore';
import InputSection from './components/inputSection';
import React, { useEffect} from 'react';
import './App.css';









function App() {
  

  
  return (
    <Provider store={store}>
    <div className="App">
      <AppBar className="Appbar" color="primary">
        <h3>
          {"TaskApp"}
        </h3>

      </AppBar>
      <div style={{marginTop:100}}>
      <InputSection/>

      </div>
      <hr></hr>
      <div>
        <TaskItem/>
      </div>
      
    </div>
    </Provider>
  );
}

export default App;
