import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
      task: "",
    };
  }

  handleTaskInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const arrayTask = this.state.taskList.concat({title: this.state.task})
    this.setState({
      taskList: arrayTask
    })
    event.preventDefault();
  }

  render() {
    const { task, taskList } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Add task</label>
            <input
              type="text"
              value={task}
              onChange={this.handleTaskInput}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          <Overview taskList={taskList}/>
        </div>
      </div>
    );
  }
}

export default App;
