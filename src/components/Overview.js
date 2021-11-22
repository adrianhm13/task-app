import React, { Component } from 'react'

class Overview extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { taskList } = this.props
        const task = taskList.map(task => <h1 key={task.title}>{task.title}</h1>)
        return (
            <div>
               {task}
            </div>
        )
    }
}

export default Overview
