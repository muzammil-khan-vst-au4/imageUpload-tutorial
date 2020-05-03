import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    fileSelected : null
  }

  handleFileUpload = (e) => {
      this.setState({
          fileSelected:  e.target.files[0]
      })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    console.log(this.state)
    data.append('photo', this.state.fileSelected)

    axios.post("http://localhost:9000/upload", data, {})
      .then(res => { 
        console.log(res.statusText)
      })
  }

  render(){
    return (
      <div className="App">
          <h1> Multer uploads</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Select file </label>
            <input type="file" multiple="" onChange={this.handleFileUpload}/><br/><br/>
            <button type="submit">Submit</button>
          </form>
        
      </div>
    );
  }
}

export default App;
