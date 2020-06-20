import React from "react"
//components

//data
import taskData from './taskData'

class App extends React.Component {
  render (props) {
    const {
      signed_in,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
      <React.Fragment>
        <h1> react </h1>
        { signed_in &&
          <div>
            <a href= { sign_out_route }> Sign Out </a>
          </div>
        }
        { !signed_in && 
          <div>
            <a href= { sign_in_route }> Sign In </a>
          </div>
        }

        <h1>tasks</h1>
        { taskData && taskData.map((task) => {
          console.log("task", task)
          let toDo = task.to_do 
          let work = []
          let chores = []
          let dayplan = []
          console.log('to do:', toDo)
          console.log('task', toDo.task)

          if(toDo.category == 'work'){
            return work.push(toDo.task)
          } 
          console.log('work', work)
        })}
        
      </React.Fragment>
    );
  }
}

export default App
