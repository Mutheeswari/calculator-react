import "./App.css";

const TaskManagement = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1>My TODO List</h1>
          <div clclassNameass="form-group">
            <div className="row">
              <div className="col-sm-1">
                <label for="usr">Enter Task : </label>
              </div>
              <div className="col-sm-9"><input type="text" className="form-control" id="usr" /></div>
              <div className="col-sm-2"><button type="button" className ="btn btn-info">X</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
