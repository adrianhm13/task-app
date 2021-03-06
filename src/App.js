import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    const taskCounter = 1;

    this.state = {
      taskCounter: taskCounter,
      taskList: [],
      task: {
        text: "",
        id: uniqid(),
        count: taskCounter,
      },
    };
  }

  handleTaskInput = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        count: this.state.taskCounter,
      },
    });
  };

  handleSubmit = (event) => {
    const arrayTask = this.state.taskList.concat(this.state.task);
    const newTaskCount = this.state.taskCounter + 1;
    this.setState({
      task: {
        text: "",
        id: uniqid(),
        count: newTaskCount,
      },
      taskList: arrayTask,
      taskCounter: newTaskCount,
    });

    event.preventDefault();
  };

  deleteTask = (taskId) => {
    const { taskList } = this.state;
    const taskDeleted = taskList.filter((task) => task.id !== taskId);
    let count = 0;
    taskDeleted.map((task) => {
      task.count = count + 1;
      count++;
      return task.count;
    });
    const newTaskCount = this.state.taskCounter - 1;
    this.setState({
      taskCounter: newTaskCount,
      taskList: taskDeleted,
      task: {
        text: "",
        id: uniqid(),
        count: newTaskCount,
      },
    });
  };

  render() {
    const { task, taskList } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Add task</label>
            <input
              type="text"
              value={task.text}
              onChange={this.handleTaskInput}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          <Overview taskList={taskList} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
