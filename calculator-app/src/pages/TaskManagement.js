import "./App.css";
import React, { useState} from "react"; 


const TaskManagement = () => {
  const [task, setTask] = useState(['shopping', 'gaming', 'scanning', 'playing']); 
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1>My TODO List</h1>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-1">
                <label for="usr">Enter Task : </label>
              </div>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="usr" />
                <ul className="list-group">
                  <li className="list-group-item list-group-item-success">
                    {task[0]}<span className="close">x</span>
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    {task[1]}<span className="close">x</span>
                  </li>
                  <li className="list-group-item list-group-item-success">
                    {task[2]}<span className="close">x</span>
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    {task[3]}<span className="close">x</span>
                  </li>
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
