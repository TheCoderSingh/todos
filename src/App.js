import "./App.scss";
import AddItem from "./components/AddItem";

function App() {
	return (
		<div className="App">
			<section id="App-title">
				<h1>Todo List</h1>
			</section>
			<section id="Add-item">
				<AddItem />
			</section>
		</div>
	);
}

export default App;
