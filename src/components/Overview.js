import React, { Component } from "react";
import "../app.css";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: props.taskList,
    };
  }

  handleDelete = (taskId) => {
    this.props.deleteTask(taskId)
  };

  render() {
    const { taskList } = this.props;

    return (
      <div>
        {taskList.map((task) => (
          <div key={task.id} className="list-general">
            <div>{task.count}</div>
            <div>{task.text}</div>
            <div>
              <button onClick={() => this.handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Overview;
