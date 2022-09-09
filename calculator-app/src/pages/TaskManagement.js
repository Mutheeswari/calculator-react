import "./App.css";
import React, { useState } from "react";

const TaskManagement = () => {
  const [task] = useState(["shopping", "gaming", "scanning", "playing"]);
  const listItems = task.map((task, index) => (
    <li
      className={`list-group-item ${
        index % 2 === 0 ? "list-group-item-danger" : "list-group-item-success"
      }`}
      key={index}
       onClick={() => (index)}
    >
      {task}
      <span className="close">x</span>
    </li>
  ));
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
                <ul className="list-group">{listItems}</ul>
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
