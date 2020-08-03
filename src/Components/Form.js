import React, { Component } from 'react' 


class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             message: '',
             topic: 'React',
        }
    }
    
    handleUsername = (event) => {
        this.setState ({
            username: event.target.value
        })
    }
    handleMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleTopic =(event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} , ${this.state.message} , ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type='text' placeholder="Username" value={this.state.username} onChange={this.handleUsername} />
                    <br></br>
                    <textarea placeholder="Enter some Message" value={this.state.message} onChange={this.handleMessage} rows="4" cols="15"></textarea>
                </div>
                <div>
                <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.handleTopic} >
                        <option value="React" >React</option>
                        <option value="Angular" >Angular</option>
                        <option value="Vue" >Vue</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
