import './styles/style.scss';
import Header from './components/Header';
import Description from './components/Description';
import Todolist from './components/Todolist';

function App() {
	return (
		<div className="App">
			<Header />
			<Description />
			<Todolist />
		</div>
	);
}

export default App;
