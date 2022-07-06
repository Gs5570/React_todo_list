import "./App.css";
import NavBar from "./components/NavBar";
import TodosList from "./components/TodosList";
import todos from "./data/todosData";
import { Component } from "react";
import todosData from "./data/todosData";
import Form from "./components/Form";

class App extends Component {
  state = {
		todosData: todosData,
		text: "",
		createdAt: "",
		isComplete: false,
	};

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		// prevent the page from reloading
		event.preventDefault();
		// create new todo after submission
		const newData = {
			text: this.state.text,
			createAt: this.state.createdAttoLocaleTimeString(),
			isComplete: this.state.isComplete
		
		};

		//update state with new object.(set the new values in the state)
		this.setState({
			todosData: [newData, ...this.state.todosData],
			text: "",
			createdAt: 0,
			isComplete: "",
		});
  }

  render(){
      return (
				<div className="App">
        
					<NavBar text="To Do React App" />

					<TodosList data={this.state.todosData} />

          <Form 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            text={this.state.text}
            createAt= {this.state.createdAt}


          />

				</div>
			);
    }

	};

export default App;
