import "./App.css";

const TaskManagement = () => {
  return (
    <>
      <div class="container">
        <div class="jumbotron">
          <h1>My TODO List</h1>
          <div class="form-group">
            <div class="row">
              <div class="col-sm-1">
                <label for="usr">Enter Task : </label>
              </div>
              <div class="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
              <div class="col-sm-2"><button type="button" class="btn btn-info">X</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
