import React, {Component} from 'react'

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="from-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success"
              >
              Add Reminder
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
