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
              <div class="col-sm-9">
                <input type="text" class="form-control" id="usr" />
                <ul class="list-group">
                  <li class="list-group-item list-group-item-success">
                    First item
                    <span className="close">x</span>
                  </li>
                  <li class="list-group-item list-group-item-danger">
                    Second item
                    <span className="close">x</span>
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Third item
                    <span className="close">x</span>
                  </li>
                  <li class="list-group-item list-group-item-danger">
                    Fourth item
                    <span className="close">x</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2">
                <button type="button" class="btn btn-info">
                 ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
