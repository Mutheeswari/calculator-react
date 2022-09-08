import "./App.css";
import React, { useState} from "react"; 


const TaskManagement = () => {
  const [task, setTask] = useState(['shopping', 'gaming', 'scanning', 'playing']);
  const listTask = task.map((taskName, index) => (
    <li
      className={`${index % 2 === 0 ? "list-group-item list-group-item-danger" : "list-group-item list-group-item-success"}`}
      key={taskName.toString()}>
      {taskName}<span className="close">x</span>
    </li>
  ));
  const addTask = ( event ) => {
    console.log(event.target.value)
    setTask(task.push(event.target.value))
  };

  
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1>My TODO List</h1>
          <div className="form-group">
            <div className="row">
              {/* <div className="col-sm-1">
                <label for="usr">Enter Task : </label>
              </div> */}
              <div className="col-sm-9">
                <input type="text" className="form-control" id="usr" placeholder="Enter Task" />
                <ul className="list-group">
                  {listTask}
                </ul>
              </div>
              <div className="col-sm-2">
                <button type="button" className="btn btn-info">
                  ADD
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-9"> */}
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
